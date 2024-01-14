import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/data/data_source/dao/record.dart'
    hide Record;
import 'package:pocket_money_management_app/data/repository/record_repository_impl.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

import 'record_repository_test.mocks.dart';

@GenerateMocks([RecordDao])
void main() {
  final recordDao = MockRecordDao();

  final sampleCategory1 =
  Category(id: 1, name: '식비', color: 1, type: CategoryType.spending);
  final sampleCategory2 =
  Category(id: 2, name: '용돈', color: 2, type: CategoryType.income);

  final samplePaymentType1 = PaymentType(id: 1, name: '체크 카드');
  final samplePaymentType2 = PaymentType(id: 2, name: '현금');

  final sampleRecord1 = Record(
      id: 1,
      value: 3000,
      timestamp: DateTime.now(),
      category: sampleCategory1,
      paymentType: samplePaymentType1);
  final sampleRecord2 = Record(
      id: 2,
      value: 4000,
      timestamp: DateTime.now(),
      category: sampleCategory1,
      paymentType: samplePaymentType1);
  final sampleRecord3 = Record(
      id: 3,
      value: 2500,
      timestamp: DateTime.now(),
      category: sampleCategory2,
      paymentType: samplePaymentType2);
  final sampleRecord4 = Record(
      id: 4,
      value: 2300,
      timestamp: DateTime.now(),
      category: sampleCategory2,
      paymentType: samplePaymentType2);

  var records = [sampleRecord1, sampleRecord2, sampleRecord3, sampleRecord4];



  when(recordDao.getRecords()).thenAnswer((_) async => records);

  final recordRepository = RecordRepositoryImpl(recordDao);

  group('record repository tests', () {
    test('stream get list test', () async {
      when(recordDao.getRecordsStream()).thenAnswer((_) =>
          Stream.fromIterable([records]));
      expect(recordRepository.getStream(), emitsInOrder([records]));
    });

    test('get test', () async {
      const id = 1;

      when(recordDao.getRecord(id)).thenAnswer((realInvocation) async {
        return records.first;
      });

      final record = await recordRepository.get(id);

      expect(record, isA<Record>());
      expect(record.id, id);
    });

    test('insert test', () {
      final sampleRecord = Record(value: 3300,
          category: Category(
              name: '의료비', color: 5, type: CategoryType.spending),
          paymentType: PaymentType(id: 3, name: '이체'));

      // Mock 데이터에 추가
      when(recordDao.insertRecord(sampleRecord)).thenAnswer((realInvocation) async {
        records.add(sampleRecord);
      });
      
      recordRepository.insert(sampleRecord);

      expect(sampleRecord, records.last);
    });


    test('update test', () async {
      final updatedRecord = records.first.copyWith(value: 1000);

      when(recordDao.updateRecord(updatedRecord)).thenAnswer((realInvocation) async {
         records[records.indexWhere((element) => element.id == updatedRecord.id)] = updatedRecord;
      });

      await recordRepository.update(updatedRecord);

      expect(updatedRecord, records.first);
    });
  });

  test('delete test', () async {
    const id = 1;

    when(recordDao.deleteRecord(id)).thenAnswer((realInvocation) async {
      records.removeWhere((element) => element.id == id);
    });

    recordRepository.delete(id);

    expect(records.where((element) => element.id == id).isEmpty, true);
  });

}

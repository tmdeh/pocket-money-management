import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:pocket_money_management_app/data/data_source/dao/payment_type.dart'
    hide PaymentType;
import 'package:pocket_money_management_app/data/repository/payment_type_repository_impl.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';

import 'payment_type_repository_test.mocks.dart';

@GenerateMocks([PaymentTypeDao])
void main() {
  late PaymentTypeRepository paymentTypeRepository;

  final mockCategoryDao = MockPaymentTypeDao();

  var paymentTypes = [
    PaymentType(name: '현금', id: 1),
    PaymentType(name: '카드', id: 2),
  ];

  setUp(() {
    paymentTypeRepository = PaymentTypeRepositoryImpl(mockCategoryDao);
  });

  group('paymentType tests', () {
    test('gets test', () async {
      when(mockCategoryDao.getPaymentTypes())
          .thenAnswer((_) async => paymentTypes);

      final mockPaymentTypes = await paymentTypeRepository.gets();
      expect(mockPaymentTypes, isA<List<PaymentType>>());
    });

    test('get test', () async {
      const id = 1;

      when(mockCategoryDao.getPaymentType(id)).thenAnswer(
          (_) async => paymentTypes.firstWhere((element) => element.id == id));

      final paymentType = await paymentTypeRepository.get(id);
      expect(paymentType, isA<PaymentType>());
      expect(paymentType.id, id);
    });

    test('insert test', () async {
      final newPaymentType = PaymentType(id: 3, name: '새로운 결제 수단');

      when(mockCategoryDao.insertPaymentType(newPaymentType))
          .thenAnswer((_) async {
        paymentTypes.add(newPaymentType);
      });

      await paymentTypeRepository.insert(newPaymentType);

      expect(paymentTypes.last, newPaymentType);
    });

    test('delete test', () async {
      const id = 1;

      when(mockCategoryDao.deletePaymentType(id)).thenAnswer((_) async {
        paymentTypes.removeWhere((element) => element.id == id);
      });

      await paymentTypeRepository.delete(id);

      expect(true, paymentTypes.where((element) => element.id == id).isEmpty);
    });

    test('update test', () async {
      final updatedPaymentType = paymentTypes.first.copyWith(name: '수정된 결제 수단');

      when(mockCategoryDao.updatePaymentType(updatedPaymentType))
          .thenAnswer((_) async {
        paymentTypes[paymentTypes
                .indexWhere((element) => element.id == updatedPaymentType.id)] =
            updatedPaymentType;
      });

      await paymentTypeRepository.update(updatedPaymentType);

      expect(
          paymentTypes
              .firstWhere((element) => element.id == updatedPaymentType.id),
          updatedPaymentType);
    });
  });
}

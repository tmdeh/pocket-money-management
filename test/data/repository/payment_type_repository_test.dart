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

  when(mockCategoryDao.getPaymentTypes()).thenAnswer((_) async => [
        PaymentType(name: '현금', id: 1),
        PaymentType(name: '카드', id: 2),
      ]);

  when(mockCategoryDao.getPaymentType(1)).thenAnswer((_) async =>
    PaymentType(name: '현금', id: 1),
  );

  setUp(() {
    paymentTypeRepository = PaymentTypeRepositoryImpl(mockCategoryDao);
  });

  group('paymentType tests', () {
    test('gets test', () async {
       final paymentTypes = await paymentTypeRepository.gets();
       expect(paymentTypes, isA<List<PaymentType>>());
    });

    test('get test', () async {
      final paymentType = await paymentTypeRepository.get(1);
      expect(paymentType, isA<PaymentType>());
      expect(paymentType.id, 1);
    });
  });
}



import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/data/data_source/dao/payment_type.dart' hide PaymentType;
import 'package:pocket_money_management_app/di/setup.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';


@Singleton(as: PaymentTypeRepository)
class PaymentTypeRepositoryImpl implements PaymentTypeRepository {
  final paymentTypeDao = getIt<PaymentTypeDao>();

  @override
  Future<void> delete(int id) async {
    await paymentTypeDao.deletePaymentType(id);
  }

  @override
  Future<PaymentType> get(int id) async {
    return await paymentTypeDao.getPaymentType(id);
  }

  @override
  Future<List<PaymentType>> gets() async {
    return await paymentTypeDao.getPaymentTypes();
  }

  @override
  Future<void> insert(PaymentType data) async {
    await paymentTypeDao.insertPaymentType(data);
  }

  @override
  Future<void> update(PaymentType data) async {
    await paymentTypeDao.updatePaymentType(data);
  }
  
}
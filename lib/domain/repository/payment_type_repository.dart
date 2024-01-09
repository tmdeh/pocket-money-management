import 'package:pocket_money_management_app/domain/model/payment_type.dart';

abstract interface class PaymentTypeRepository {
  Future<List<PaymentType>> gets();

  Future<PaymentType> get();

  Future<void> insert(PaymentType data);

  Future<void> update(PaymentType data);

  Future<void> delete(int id);
}

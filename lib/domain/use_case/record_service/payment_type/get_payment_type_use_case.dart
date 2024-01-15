


import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';


class GetPaymentTypeUseCase {
  final PaymentTypeRepository _paymentTypeRepository;

  GetPaymentTypeUseCase(this._paymentTypeRepository);

  Future<PaymentType> call(int id) async {
    return await _paymentTypeRepository.get(id);
  }
}
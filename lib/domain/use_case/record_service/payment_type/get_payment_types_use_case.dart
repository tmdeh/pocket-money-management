

import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';

class GetPaymentTypesUseCase {

  final PaymentTypeRepository _paymentTypeRepository;

  GetPaymentTypesUseCase(this._paymentTypeRepository);

  Future<List<PaymentType>> call() async {
    return await _paymentTypeRepository.gets();
  }

}
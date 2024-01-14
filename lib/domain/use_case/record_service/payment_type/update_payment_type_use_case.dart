

import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';

class UpdatePaymentTypeUseCase {
  final PaymentTypeRepository _paymentTypeRepository;

  UpdatePaymentTypeUseCase(this._paymentTypeRepository);

  Future<void> call(PaymentType data) async {
    await _paymentTypeRepository.update(data);
  }

}
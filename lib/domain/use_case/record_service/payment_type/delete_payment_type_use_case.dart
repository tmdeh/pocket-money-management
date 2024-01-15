

import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';

class DeletePaymentTypeUseCase {

  final PaymentTypeRepository _paymentTypeRepository;
  DeletePaymentTypeUseCase(this._paymentTypeRepository);

  Future<void> call(int id) async {
    await _paymentTypeRepository.delete(id);
  }
}
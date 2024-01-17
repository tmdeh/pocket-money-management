

import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/repository/payment_type_repository.dart';

@singleton
class AddPaymentTypeUseCase {

  final PaymentTypeRepository _paymentTypeRepository;

  AddPaymentTypeUseCase(this._paymentTypeRepository);

  Future<void> call(PaymentType data) async {
    await _paymentTypeRepository.insert(data);
  }
}
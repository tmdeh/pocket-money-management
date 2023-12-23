import 'package:freezed_annotation/freezed_annotation.dart';

part 'payment_type.freezed.dart';
part 'payment_type.g.dart';

@freezed
class PaymentType with _$PaymentType {
  factory PaymentType({
    int? id,
    required String name,
  }) = _PaymentType;

  factory PaymentType.fromJson(Map<String, dynamic> json) =>
      _$PaymentTypeFromJson(json);
}

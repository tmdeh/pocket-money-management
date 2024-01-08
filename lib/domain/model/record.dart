import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';

part 'record.freezed.dart';
part 'record.g.dart';


@freezed
class Record with _$Record {

  factory Record({
    int? id,
    DateTime? timestamp,
    required int value,
    required Category category,
    @JsonKey(name: 'payment_type')
    required PaymentType paymentType
  }) = _Record;

  factory Record.fromJson(Map<String, dynamic> json) => _$RecordFromJson(json);
}

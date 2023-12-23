import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/data/model/category.dart';
import 'package:pocket_money_management_app/data/model/payment_type.dart';

part 'record.freezed.dart';
part 'record.g.dart';

@freezed
class Record with _$Record {
  factory Record({
    int? id,
    required String name,
    required int timestamp,
    required Category category,
    @JsonKey(name: 'payment_type')
    required PaymentType paymentType,
  }) = _Record;

  factory Record.fromJson(Map<String, dynamic> json) => _$RecordFromJson(json);
}

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';

part 'record.freezed.dart';
part 'record.g.dart';


@freezed
class Record with _$Record {

  factory Record({
    int? id,
    required int timestamp,
    required Map<String, dynamic> category,
    @JsonKey(name: 'payment_type')
    required Map<String, dynamic> paymentType
  }) = _Record;

  factory Record.fromJson(Map<String, dynamic> json) => _$RecordFromJson(json);
}

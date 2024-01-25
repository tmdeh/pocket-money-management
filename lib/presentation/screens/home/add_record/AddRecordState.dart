import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/core/category_type.dart';

part 'AddRecordState.freezed.dart';

@freezed
class AddRecordState with _$AddRecordState {
  factory AddRecordState({
    required CategoryType type,
  }) = _AddRecordState;
}

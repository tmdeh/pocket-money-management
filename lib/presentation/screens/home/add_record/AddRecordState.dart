import 'package:freezed_annotation/freezed_annotation.dart';

part 'AddRecordState.freezed.dart';

@freezed
class AddRecordState with _$AddRecordState {
  factory AddRecordState({
    required int data
  }) = _AddRecordState;
}

import 'package:freezed_annotation/freezed_annotation.dart';

part 'addRecordEvent.freezed.dart';

@freezed
class AddRecordEvent with _$AddRecordEvent {
  const factory AddRecordEvent.saveRecord() = _SaveRecord;
  const factory AddRecordEvent.showSnackBar() = _ShowSnackBar;
}

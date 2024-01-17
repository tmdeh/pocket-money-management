import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

part 'home_state.freezed.dart';

@freezed
class HomeState with _$HomeState {
  factory HomeState({
    required List<Record> records,
    required DateTime focusedDate,
  }) = _HomeState;
}

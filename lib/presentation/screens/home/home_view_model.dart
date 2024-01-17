import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record_use_case.dart';
import 'package:pocket_money_management_app/presentation/screens/home/calender_event.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_state.dart';

@injectable
class HomeViewModel with ChangeNotifier {
  final RecordUseCase _recordUseCase;

  HomeViewModel(this._recordUseCase);

  HomeState _state = HomeState(records: [], focusedDate: DateTime.now());

  HomeState get state => _state;

  void onEvent(CalenderEvent event) {
    event.when(
      onTapDay: _changeDay,
    );
  }

  void _changeDay(DateTime selectedDate) {
    _state = _state.copyWith(focusedDate: selectedDate);
    notifyListeners();
  }

}

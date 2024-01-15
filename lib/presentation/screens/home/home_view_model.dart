import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record_use_case.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_state.dart';

class HomeViewModel with ChangeNotifier {

  final RecordUseCase _recordUseCase;

  HomeViewModel(this._recordUseCase);

  HomeState _state = HomeState(
    data: 0,
  );

  HomeState get state => _state;
}

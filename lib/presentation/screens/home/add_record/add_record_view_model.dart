

import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record_use_case.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/AddRecordState.dart';

@injectable
class AddRecordViewModel with ChangeNotifier {

  final RecordUseCase _recordUseCase;

  AddRecordState _state = AddRecordState(data: 0);
  AddRecordState get state => _state;

  AddRecordViewModel(this._recordUseCase);
}

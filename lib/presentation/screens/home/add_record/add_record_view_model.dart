

import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record_use_case.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/AddRecordState.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/addRecordEvent.dart';

@injectable
class AddRecordViewModel with ChangeNotifier {

  final RecordUseCase _recordUseCase;

  final AddRecordState _state = AddRecordState(type: CategoryType.income);
  AddRecordState get state => _state;

  AddRecordViewModel(this._recordUseCase);

  void onEvent(AddRecordEvent event) {
    event.when(saveRecord: () {}, showSnackBar: () {});
  }
}

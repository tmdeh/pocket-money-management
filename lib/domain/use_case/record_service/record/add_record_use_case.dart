

import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/repository/record_repository.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

@singleton
class AddRecordUseCase {

  final RecordRepository _recordRepository;

  AddRecordUseCase(this._recordRepository);

  Future<void> call(Record data) async {
    await _recordRepository.insert(data);
  }

}
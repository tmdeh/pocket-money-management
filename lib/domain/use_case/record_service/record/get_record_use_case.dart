

import 'package:pocket_money_management_app/domain/repository/record_repository.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

class GetRecordUseCase {
  final RecordRepository _recordRepository;
  GetRecordUseCase(this._recordRepository);

  Future<Record> call(int id) async {
    return await _recordRepository.get(id);
  }
}
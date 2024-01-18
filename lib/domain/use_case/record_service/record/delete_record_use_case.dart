

import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/repository/record_repository.dart';

@singleton
class DeleteRecordUseCase {

  final RecordRepository _recordRepository;

  DeleteRecordUseCase(this._recordRepository);

  Future<void> call(int id) async {
    await _recordRepository.delete(id);
  }
}
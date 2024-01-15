
import 'package:pocket_money_management_app/domain/repository/record_repository.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

class GetReCordsUseCase {
  final RecordRepository _recordRepository;
  GetReCordsUseCase(this._recordRepository);

  Stream<List<Record>> call() {
    return _recordRepository.getStream();
  }
}
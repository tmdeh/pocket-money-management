


import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/data/data_source/dao/record.dart' hide Record;
import 'package:pocket_money_management_app/domain/model/record.dart';
import 'package:pocket_money_management_app/domain/repository/record_repository.dart';

@Singleton(as: RecordRepository)
class RecordRepositoryImpl implements RecordRepository {

  final RecordDao recordDao;
  RecordRepositoryImpl(this.recordDao);

  @override
  Future<void> delete(int id) async {
    await recordDao.deleteRecord(id);
  }

  @override
  Future<Record> get(int id) async {
    return await recordDao.getRecord(id);
  }

  @override
  Stream<List<Record>> getStream() {
    return recordDao.getRecordsStream();
  }

  @override
  Future<void> insert(Record data) async {
    await recordDao.insertRecord(data);
  }

  @override
  Future<void> update(Record data) async {
    await recordDao.updateRecord(data);
  }
  
}
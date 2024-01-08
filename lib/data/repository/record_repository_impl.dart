


import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';
import 'package:pocket_money_management_app/domain/repository/record_repository.dart';

@Singleton(as: RecordRepository)
class RecordRepositoryImpl implements RecordRepository {
  @override
  Future<void> delete(int id) {
    // TODO: implement delete
    throw UnimplementedError();
  }

  @override
  Future<Record> get() {
    // TODO: implement get
    throw UnimplementedError();
  }

  @override
  Stream<List<Record>> getStream() {
    // TODO: implement getStream
    throw UnimplementedError();
  }

  @override
  Future<void> insert(Record data) {
    // TODO: implement insert
    throw UnimplementedError();
  }

  @override
  Future<void> update(Record data) {
    // TODO: implement update
    throw UnimplementedError();
  }
  
}
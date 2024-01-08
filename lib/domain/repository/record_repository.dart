
import 'package:pocket_money_management_app/domain/model/record.dart';

abstract interface class RecordRepository {

  Stream<List<Record>> getStream();

  Future<Record> get();

  Future<void> insert(Record data);

  Future<void> delete(int id);

  Future<void> update(Record data);
  
}
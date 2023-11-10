


import 'package:pocket_money_management_app/model/record.dart';

abstract class RecordRepository {

  late List<Record> records;

  List<Record> getList() {
    return records;
  }

  void updateItem(Record record, int id);

  void deleteItem(int id);

  Record getItem(int id) {
    return records[id];
  }

}
import 'package:pocket_money_management_app/model/record.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';

class MemoryRecordRepository implements RecordRepository {

  @override
  late List<Record> _records;

  MemoryRecordRepository() {
    _records = [
      Record('memo1', RecordType.spend, 3000, '식비', DateTime.now()),
      Record('memo2', RecordType.income, 3000, '월급', DateTime.now()),
      Record('memo3', RecordType.income, 3000, '용돈', DateTime.now()),
      Record('memo4', RecordType.spend, 3000, '의료비', DateTime.now()),
      Record('memo5', RecordType.spend, 3000, '교통비', DateTime.now()),
    ];
  }

  @override
  void deleteItem(int id) {
    _records.removeAt(id);
  }

  @override
  Record getItem(int id) {
    // TODO: implement getItem
    return _records[id];
  }

  @override
  List<Record> getRecordList() {
    return _records!;
  }

  @override
  void updateItem(Record record, int id) {
    // TODO: implement updateItem
  }

}


import 'package:pocket_money_management_app/model/record.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';

class MemoryRepository implements RecordRepository {


  @override
  late List<Record> records;

  MemoryRepository() {
    records = [
      Record("memo1", RecordType.income, 2000, '월급', DateTime.now()),
      Record("memo2", RecordType.spend, 3000, '식비', DateTime.now()),
      Record("memo3", RecordType.income, 3000, '용돈', DateTime.now()),
      Record("memo4", RecordType.income, 2000, '월급', DateTime.now()),
      Record("memo5", RecordType.spend, 4000, '의료비', DateTime.now())
    ];

  }

  @override
  void deleteItem(int id) {
    records.removeAt(id);
  }

  @override
  Record getItem(int id) {
    return records[id];
  }

  @override
  List<Record> getList() {
    return records;
  }

  @override
  void updateItem(Record record, int id) {
    records[id] = record;
  }


}
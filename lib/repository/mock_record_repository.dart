import 'package:pocket_money_management_app/model/record.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';

class MockRecordRespository extends RecordRepository {
  @override
  final List<Record> _records = [
    Record('memo1', RecordType.spend, 3000, '식비', DateTime.now()),
    Record('memo1', RecordType.income, 3000, '월급', DateTime.now()),
    Record('memo1', RecordType.income, 3000, '용돈', DateTime.now()),
    Record('memo1', RecordType.spend, 3000, '의료비', DateTime.now()),
    Record('memo1', RecordType.spend, 3000, '교통비', DateTime.now()),
  ];

}

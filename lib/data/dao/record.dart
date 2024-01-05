

import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/data/dao/category.dart';
import 'package:pocket_money_management_app/data/dao/payment_type.dart';
import 'package:pocket_money_management_app/data/database_setup.dart';

part 'record.g.dart';

class Record extends Table {
  IntColumn get id => integer().autoIncrement()();

  DateTimeColumn get timestamp => dateTime().clientDefault(() => DateTime.now())();

  IntColumn get category => integer().references(Category, #id)();

  IntColumn get paymentType => integer().references(PaymentType, #id)();
}



@DriftAccessor(tables: [Record, Category, PaymentType])
class RecordDao extends DatabaseAccessor<Database> with _$RecordDaoMixin {
  RecordDao(Database db) : super(db);

  Stream<List<RecordData>> getRecordDatas() {
    final query = select(record).join([
      innerJoin(category, category.id.equalsExp(record.id)),
    ]).join([
      innerJoin(paymentType, paymentType.id.equalsExp(record.id))
    ]);


    return query.map((row) => row.readTable(record)).watch();
  }

  // TODO: 삽입


  // TODO: 수정

  // TODO: 하나만 불러오기

  // TODO: 삭제

}
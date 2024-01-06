import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/data/dao/category.dart';
import 'package:pocket_money_management_app/data/dao/payment_type.dart';
import 'package:pocket_money_management_app/data/database_setup.dart';

import 'package:pocket_money_management_app/domain/model/record.dart' as model;

part 'record.g.dart';

class Record extends Table {
  IntColumn get id => integer().autoIncrement()();

  DateTimeColumn get timestamp =>
      dateTime().clientDefault(() => DateTime.now())();

  IntColumn get value => integer()();

  IntColumn get category => integer().references(Category, #id)();

  IntColumn get paymentType => integer().references(PaymentType, #id)();
}

@DriftAccessor(tables: [Record, Category, PaymentType])
class RecordDao extends DatabaseAccessor<Database> with _$RecordDaoMixin {
  RecordDao(Database db) : super(db);

  Stream<List<RecordData>> getRecords() {
    final query = select(record).join([
      innerJoin(category, category.id.equalsExp(record.id)),
    ]).join([innerJoin(paymentType, paymentType.id.equalsExp(record.id))]);

    return query.map((row) => row.readTable(record)).watch();
  }

  Future insertRecord(model.Record data) async {
    return into(record).insert(RecordCompanion(
      category: Value(data.category.id!),
      value: Value(data.value),
      paymentType: Value(data.paymentType.id!),
    ));
  }

  Future updateRecord(model.Record data) async {
    return (update(record)..where((tbl) => tbl.id.equals(data.id!)))
        .write(RecordCompanion(
      category: Value(data.category.id!),
      value: Value(data.value),
      paymentType: Value(data.paymentType.id!),
    ));
  }

  Future<RecordData> getRecord(int id) async =>
      (select(record)..where((tbl) => tbl.id.equals(id))).getSingle();


  Future deleteRecord(int id) async =>
      delete(record)..where((tbl) => tbl.id.equals(id));
}

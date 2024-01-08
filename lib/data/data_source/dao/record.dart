import 'package:drift/drift.dart';
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/data/data_source/dao/category.dart';
import 'package:pocket_money_management_app/data/data_source/dao/payment_type.dart';
import 'package:pocket_money_management_app/data/data_source/database_setup.dart';

import 'package:pocket_money_management_app/domain/model/record.dart' as model;
import 'package:pocket_money_management_app/domain/model/category.dart' as category_model;
import 'package:pocket_money_management_app/domain/model/payment_type.dart' as paymentType_model;

part 'record.g.dart';

class Record extends Table {
  IntColumn get id => integer().autoIncrement()();

  DateTimeColumn get timestamp =>
      dateTime().clientDefault(() => DateTime.now())();

  IntColumn get value => integer()();

  IntColumn get category => integer().references(Category, #id)();

  IntColumn get paymentType => integer().references(PaymentType, #id)();
}

@singleton
@DriftAccessor(tables: [Record, Category, PaymentType])
class RecordDao extends DatabaseAccessor<Database> with _$RecordDaoMixin {
  RecordDao(Database db) : super(db);

  Stream<List<model.Record>> getRecordsStream() {
    final query = (select(record).join([
      innerJoin(category, category.id.equalsExp(record.id)),
      innerJoin(paymentType, paymentType.id.equalsExp(record.id))
    ]));

    return query.map((row) {
      final r = row.readTable(record);
      final c = row.readTable(category);
      final p  = row.readTable(paymentType);

      return model.Record(
          id: r.id,
          value: r.value,
          category: category_model.Category(
              id: c.id,
              name: c.name,
              type: c.type,
              color: c.color
          ),
          paymentType: paymentType_model.PaymentType(
            id: p.id,
            name: p.name,
          ),
          timestamp: r.timestamp
      );
    }).watch();

  }


  Future<List<model.Record>> getRecords() {
    final query = (select(record).join([
      innerJoin(category, category.id.equalsExp(record.id)),
      innerJoin(paymentType, paymentType.id.equalsExp(record.id))
    ]));

    return query.map((row) {
      final r = row.readTable(record);
      final c = row.readTable(category);
      final p  = row.readTable(paymentType);

      return model.Record(
          id: r.id,
          value: r.value,
          category: category_model.Category(
              id: c.id,
              name: c.name,
              type: c.type,
              color: c.color
          ),
          paymentType: paymentType_model.PaymentType(
            id: p.id,
            name: p.name,
          ),
          timestamp: r.timestamp
      );
    }).get();

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
      timestamp: Value(data.timestamp!),
      value: Value(data.value),
      paymentType: Value(data.paymentType.id!),
    ));
  }

  Future<model.Record> getRecord(int id) async {
    final query = (select(record).join([
      innerJoin(category, category.id.equalsExp(record.id)),
      innerJoin(paymentType, paymentType.id.equalsExp(record.id))
    ]))
      ..where(record.id.equals(id));

    return query.getSingle().then((value) {
      final r = value.readTable(record);
      final c = value.readTable(category);
      final p  = value.readTable(paymentType);

      return model.Record(
        id: r.id,
        value: r.value,
        category: category_model.Category(
          id: c.id,
          name: c.name,
          type: c.type,
          color: c.color
        ),
        paymentType: paymentType_model.PaymentType(
          id: p.id,
          name: p.name,
        ),
        timestamp: r.timestamp
      );

    });
  }
  Future deleteRecord(int id) async =>
      (delete(record)..where((tbl) => tbl.id.equals(id))).go();
}
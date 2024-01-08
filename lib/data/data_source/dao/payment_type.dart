import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/data/data_source/database_setup.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart'
    as model;

part 'payment_type.g.dart';

class PaymentType extends Table {
  IntColumn get id => integer().autoIncrement()();

  TextColumn get name => text()();
}

@DriftAccessor(tables: [PaymentType])
class PaymentTypeDao extends DatabaseAccessor<Database>
    with _$PaymentTypeDaoMixin {
  PaymentTypeDao(Database db) : super(db);

  Future insertPaymentType(model.PaymentType data) async =>
      into(paymentType).insert(PaymentTypeCompanion(
        name: Value(data.name),
      ));

  Future<List<model.PaymentType>> getPaymentTypes() async =>
      select(paymentType).get().then((value) => value
          .map((e) => model.PaymentType(
                name: e.name,
                id: e.id,
              ))
          .toList());

  Future<model.PaymentType> getPaymentType(int id) async =>
      (select(paymentType)..where((tbl) => tbl.id.equals(id)))
          .getSingle()
          .then((value) => model.PaymentType(
                name: value.name,
                id: value.id,
              ));

  Future deletePaymentType(int id) async =>
      (delete(paymentType)..where((tbl) => tbl.id.equals(id))).go();

  Future updatePaymentType(model.PaymentType data) async =>
      (update(paymentType)..where((tbl) => tbl.id.equals(data.id!)))
          .write(PaymentTypeCompanion(
        name: Value(data.name),
      ));
}



import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/data/dao/category.dart';
import 'package:pocket_money_management_app/data/dao/payment_type.dart';

class Record extends Table {
  IntColumn get id => integer().autoIncrement()();

  DateTimeColumn get timestamp => dateTime().clientDefault(() => DateTime.now())();

  IntColumn get category => integer().references(Category, #id)();

  IntColumn get paymentType => integer().references(PaymentType, #id)();
}

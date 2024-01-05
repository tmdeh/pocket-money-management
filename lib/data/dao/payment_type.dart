

import 'package:drift/drift.dart';

class PaymentType extends Table {
  IntColumn get id => integer().autoIncrement()();
  
  TextColumn get name => text()();
}
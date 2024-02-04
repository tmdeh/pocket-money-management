import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:pocket_money_management_app/core/default_payment_type.dart';
import 'package:pocket_money_management_app/data/data_source/dao/category.dart';
import 'package:pocket_money_management_app/data/data_source/dao/payment_type.dart';
import 'package:pocket_money_management_app/data/data_source/dao/record.dart';
import 'package:sqlite3/sqlite3.dart';
import 'package:sqlite3_flutter_libs/sqlite3_flutter_libs.dart';

part 'database_setup.g.dart';

@DriftDatabase(tables: [Record, PaymentType, Category])
class Database extends _$Database {
  Database(QueryExecutor? e) : super(e ?? _openConnection());

  @override
  int get schemaVersion => 1;

  @override
  MigrationStrategy get migration {
    return MigrationStrategy(onCreate: (Migrator m) async {
      await m.createAll();
      for (var v in defaultCategories) {
        into(category).insert(CategoryCompanion.insert(
          name: v.name,
          color: v.color,
          type: v.type,
        ));
      }
      for (var v in defaultPaymentTypes) {
        into(paymentType).insert(PaymentTypeCompanion.insert(
          name: v.name,
        ));
      }
    });
  }
}

LazyDatabase _openConnection() {
  return LazyDatabase(() async {
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));

    if (Platform.isAndroid) {
      await applyWorkaroundToOpenSqlite3OnOldAndroidVersions();
    }

    final cachebase = (await getTemporaryDirectory()).path;
    sqlite3.tempDirectory = cachebase;

    return NativeDatabase.createInBackground(file);
  });
}

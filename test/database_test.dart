

import 'package:flutter_test/flutter_test.dart';
import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:sqflite_common_ffi/sqflite_ffi.dart';

void main() {
  test('데이터베이스가 제대로 생성되는지 테스트', () async {
    var db = await databaseFactoryFfi.openDatabase(inMemoryDatabasePath);

    await db.execute(
        'CREATE TABLE `category` ('
            '`id` INTEGER PRIMARY KEY AUTOINCREMENT , '
            '`name` text, '
            '`color` INTEGER, '
            '`type` text CHECK(`type` IN ("income", "spending")));'
    );
    await db.execute(
        'CREATE TABLE `payment_type` ('
            '`id` INTEGER PRIMARY KEY AUTOINCREMENT ,'
            '`name` text);'
    );
    await db.execute(
        'CREATE TABLE `records` ('
            '`id` INTEGER PRIMARY KEY AUTOINCREMENT , '
            '`timestamp` INTEGER, '
            '`category` INTEGER, '
            '`payment_type` INTEGER, '
            'FOREIGN KEY(`category`) REFERENCES category (`id`), '
            'FOREIGN KEY(`payment_type`) REFERENCES payment_type (`id`)'
            ');'
    );

    Batch batch = db.batch();

    for (var category in defaultCategories) {
      batch.insert('category', category.toJson());
    }
    batch.commit();


    final categories = await db.query('category');

    print(categories);

  });
}
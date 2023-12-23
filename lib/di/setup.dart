import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:sqflite/sqflite.dart';

Future<void> setup() async {

  var db = await openDatabase(
    'money_management.db',
    version: 1,
    onCreate: (Database db, int version) async {
      await db.execute(
          'CREATE TABLE `category` ('
              '`id` int PRIMARY KEY AUTOINCREMENT , '
              '`name` text, '
              '`color` int, '
              '`type` text CHECK(`type` IN ("income", "spending")));'
      );
      await db.execute(
          'CREATE TABLE `payment_type` ('
              '`id` int PRIMARY KEY AUTOINCREMENT ,'
              '`name` text);'
      );
      await db.execute(
          'CREATE TABLE `records` ('
          '`id` int PRIMARY KEY AUTOINCREMENT , '
          '`name` text,`timestamp` int, '
          'FOREIGN KEY(`category`) REFERENCES category(id) , '
          'FOREIGN KEY(`payment_type`) REFERENCES payment_type (id);');

      Batch batch = db.batch();

      for (var category in defaultCategories) {
        batch.insert('category', category.toJson());
      }

      batch.commit();
    },
  );
}
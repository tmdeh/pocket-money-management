import 'package:flutter_test/flutter_test.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/model/payment_type.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';
import 'package:sqflite_common_ffi/sqflite_ffi.dart';

void main() {
  const categoryCount = 7;

  test('데이터베이스가 제대로 생성되는지 테스트', () async {
    var db = await databaseFactoryFfi.openDatabase(inMemoryDatabasePath);

    await db.execute('CREATE TABLE `category` ('
        '`id` INTEGER PRIMARY KEY AUTOINCREMENT , '
        '`name` text, '
        '`color` INTEGER, '
        '`type` text CHECK(`type` IN ("income", "spending")));');
    await db.execute('CREATE TABLE `payment_type` ('
        '`id` INTEGER PRIMARY KEY AUTOINCREMENT ,'
        '`name` text);');
    await db.execute('CREATE TABLE `records` ('
        '`id` INTEGER PRIMARY KEY AUTOINCREMENT , '
        '`timestamp` INTEGER, '
        '`category` INTEGER, '
        '`payment_type` INTEGER, '
        'FOREIGN KEY(`category`) REFERENCES category (`id`), '
        'FOREIGN KEY(`payment_type`) REFERENCES payment_type (`id`)'
        ');');

    Batch batch = db.batch();

    for (var category in defaultCategories) {
      batch.insert('category', category.toJson());
    }
    batch.commit();

    final categoriesMap = await db.query('category');

    // 카테고리 개수 확인
    expect(categoryCount, categoriesMap.length);

    final categories = categoriesMap.map((e) => Category.fromJson(e));

    // 변환이 되는지 확인
    expect(categories.first, isA<Category>());

    final exRecord = Record(
      timestamp: 1,
      category: Category(name: '카테고리 1', type: CategoryType.income, color: 1).toJson(),
      paymentType: PaymentType(name: '현금', id: 0).toJson(),
    );

    await db.insert('record', exRecord.toJson());

  });
}

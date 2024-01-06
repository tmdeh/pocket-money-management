import 'package:drift/native.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/domain/model/category.dart'
    as model;
import 'package:pocket_money_management_app/data/dao/category.dart';
import 'package:pocket_money_management_app/data/database_setup.dart';

void main() async {
  late Database database;

  setUp(() {
    database = Database(NativeDatabase.memory());
  });

  tearDown(() async {
    database.close();
  });

  test('데이터베이스가 제대로 생성되는지 테스트', () async {
    final tables = database.allTables.toList();
    expect(tables.length, 3);
  });

  test('category table test', () async {
    final CategoryDao categoryDao = CategoryDao(database);

    final category1 =
        model.Category(name: '카테고리1', type: CategoryType.spending, color: 1);
    final category2 =
        model.Category(name: '카테고리2', type: CategoryType.income, color: 2);

    // insert
    await categoryDao.insertCategory(category1);
    await categoryDao.insertCategory(category2);

    // -----------------------------------------------------------

    final categoryList = await categoryDao.getCategories();

    // select all test
    expect(categoryList[0].name, category1.name);
    expect(categoryList[0].type, category1.type);

    // -----------------------------------------------------------

    final firstCategory = categoryList[0];

    var searchedCategory = await categoryDao.getCategory(firstCategory.id!);

    // select
    expect(searchedCategory, firstCategory);
    // -----------------------------------------------------------

    // update
    final updatedCategory =
        firstCategory.copyWith(name: 'changed name', type: CategoryType.income);
    await categoryDao.updateCategory(updatedCategory);

    searchedCategory = await categoryDao.getCategory(updatedCategory.id!);

    expect(searchedCategory.name, updatedCategory.name);
    expect(searchedCategory.id, updatedCategory.id);

  });

  test('payment_type table test', () {

  });

  test('record table test', () {

  });
}

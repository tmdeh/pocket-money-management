import 'package:drift/native.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/data/dao/payment_type.dart';
import 'package:pocket_money_management_app/domain/model/category.dart'
as category_model;
import 'package:pocket_money_management_app/domain/model/payment_type.dart' as payment_type_model;
import 'package:pocket_money_management_app/domain/model/record.dart' as record_model;
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
    category_model.Category(
        name: '카테고리1', type: CategoryType.spending, color: 1);
    final category2 =
    category_model.Category(name: '카테고리2', type: CategoryType.income, color: 2);

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

    // -----------------------------------------------------------

    // delete
    await categoryDao.deleteCategory(firstCategory.id!);
    final count = (await categoryDao.getCategories()).length;

    expect(count, 1);
  });

  test('payment_type table test', () async {
    final paymentTypeDao = PaymentTypeDao(database);

    // insert
    final paymentType1 = payment_type_model.PaymentType(name: '현금');
    final paymentType2 = payment_type_model.PaymentType(name: '카드');

    await paymentTypeDao.insertPaymentType(paymentType1);
    await paymentTypeDao.insertPaymentType(paymentType2);

    // -----------------------------------------------------------

    // select all
    final searchedPaymentTypes = await paymentTypeDao.getPaymentTypes();
    expect(searchedPaymentTypes.length, 2);

    // -----------------------------------------------------------

    // select
    final firstPaymentType = await paymentTypeDao.getPaymentType(1);
    expect(firstPaymentType.name, paymentType1.name);

    // ----------------------------------------------------------

    // update

    final updatedFirstPaymentType = firstPaymentType.copyWith(name: '현금 수정');

    await paymentTypeDao.updatePaymentType(updatedFirstPaymentType);

    final updatedPaymentType = await paymentTypeDao.getPaymentType(
        updatedFirstPaymentType.id!);

    expect(updatedFirstPaymentType.id, updatedPaymentType.id);
    expect(updatedFirstPaymentType.name, updatedPaymentType.name);

    // delete
    await paymentTypeDao.deletePaymentType(updatedPaymentType.id!);

    final count = (await paymentTypeDao.getPaymentTypes()).length;
    expect(count, 1);

  });

  test('record table test', () {

    // insert

    // select all stream

    // select

    // update

    // delete

  });
}

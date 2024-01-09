import 'package:drift/drift.dart';
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/data/data_source/database_setup.dart';
import 'package:pocket_money_management_app/domain/model/category.dart'
    as model;

part 'category.g.dart';

class Category extends Table {
  // 아이디
  IntColumn get id => integer().autoIncrement()();

  TextColumn get name => text()();

  IntColumn get color => integer()();

  // 소비, 지출 타입
  TextColumn get type => textEnum<CategoryType>()();
}

@singleton
@DriftAccessor(tables: [Category])
class CategoryDao extends DatabaseAccessor<Database> with _$CategoryDaoMixin {
  CategoryDao(Database db) : super(db);

  Future<List<model.Category>> getCategories() =>
      select(category).get().then((value) => value
          .map((e) => model.Category(
                id: e.id,
                color: e.color,
                type: e.type,
                name: e.name,
              ))
          .toList());

  Future<model.Category> getCategory(int id) async =>
      (select(category)..where((tbl) => tbl.id.equals(id)))
          .getSingle()
          .then((value) => model.Category(
                id: value.id,
                name: value.name,
                type: value.type,
                color: value.color,
              ));

  Future deleteCategory(int id) async =>
      (delete(category)..where((tbl) => tbl.id.equals(id))).go();

  Future insertCategory(model.Category data) async {
    into(category).insert(CategoryCompanion(
      type: Value(data.type),
      color: Value(data.color),
      name: Value(data.name),
    ));
  }

  Future updateCategory(model.Category data) async =>
      (update(category)..where((tbl) => tbl.id.equals(data.id!))).write(
        CategoryCompanion(
          type: Value(data.type),
          color: Value(data.color),
          name: Value(data.name),
        ),
      );
}

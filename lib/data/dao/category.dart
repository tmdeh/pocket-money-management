import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/data/database_setup.dart';
import 'package:pocket_money_management_app/domain/model/category.dart'
    as Model;

part 'category.g.dart';

class Category extends Table {
  // 아이디
  IntColumn get id => integer().autoIncrement()();

  // 색
  IntColumn get color => integer()();

  // 소비, 지출 타입
  TextColumn get type => textEnum<CategoryType>()();
}

@DriftAccessor(tables: [Category])
class CategoryDao extends DatabaseAccessor<Database> with _$CategoryDaoMixin {
  CategoryDao(Database db) : super(db);

  Future<List<CategoryData>> getCategories() async => select(category).get();

  Future<CategoryData> getCategory(int id) async =>
      (select(category)..where((tbl) => tbl.id.equals(id))).getSingle();

  Future deleteCategory(int id) async =>
      delete(category)..where((tbl) => tbl.id.equals(id));

  Future insertCategory(Model.Category data) async {
    into(category).insert(CategoryCompanion(
      type: Value(data.type),
      color: Value(data.color),
    ));
  }

  Future updateCategory(Model.Category data) async =>
      (update(category)..where((tbl) => tbl.id.equals(data.id!))).write(
        CategoryCompanion(
          color: Value(data.color),
          type: Value(data.type),
        ),
      );
}

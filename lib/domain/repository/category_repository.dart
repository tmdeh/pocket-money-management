import 'package:pocket_money_management_app/domain/model/category.dart';

abstract interface class CategoryRepository {
  Future<List<Category>> gets();

  Future<Category> get(int id);

  Future<void> insert(Category data);

  Future<void> update(Category data);

  Future<void> delete(int id);
}

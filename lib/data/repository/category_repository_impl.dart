import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/data/data_source/dao/category.dart' hide Category;
import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

@Singleton(as: CategoryRepository)
class CategoryRepositoryImpl implements CategoryRepository {

  late CategoryDao categoryDao;

  CategoryRepositoryImpl(this.categoryDao);

  @override
  Future<void> delete(int id) async {
    await categoryDao.deleteCategory(id);
  }

  @override
  Future<Category> get(int id) async {
    return await categoryDao.getCategory(id);
  }

  @override
  Future<List<Category>> gets() async {
    return await categoryDao.getCategories();
  }

  @override
  Future<void> insert(Category data) async {
    await categoryDao.insertCategory(data);
  }

  @override
  Future<void> update(Category data) async {
    await categoryDao.updateCategory(data);
  }
}

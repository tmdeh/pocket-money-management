import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/data/data_source/dao/category.dart'
    hide Category;
import 'package:pocket_money_management_app/data/repository/category_repository_impl.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

import 'category_repsitory_test.mocks.dart';

@GenerateMocks([CategoryDao])
void main() {
  late CategoryRepository categoryRepository;

  final mockCategoryDao = MockCategoryDao();

  when(mockCategoryDao.getCategories()).thenAnswer((_) async => [
        Category(name: '카테고리 1', color: 1, type: CategoryType.income, id: 1),
        Category(name: '카테고리 2', color: 2, type: CategoryType.income, id: 2),
        Category(name: '카테고리 4', color: 3, type: CategoryType.spending, id: 3),
      ]);

  setUp(() {
    categoryRepository = CategoryRepositoryImpl(mockCategoryDao);
  });

  test('category repository gets test', () async {
    final categories = categoryRepository.gets();



  });
}

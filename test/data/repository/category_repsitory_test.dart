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

  var categories = [
    Category(name: '카테고리 1', color: 1, type: CategoryType.income, id: 1),
    Category(name: '카테고리 2', color: 2, type: CategoryType.income, id: 2),
    Category(name: '카테고리 4', color: 3, type: CategoryType.spending, id: 3),
  ];

  setUp(() {
    categoryRepository = CategoryRepositoryImpl(mockCategoryDao);
  });

  group('category repository test', () {
    test('gets test', () async {
      when(mockCategoryDao.getCategories()).thenAnswer((_) async => categories);

      final mockCategories = await categoryRepository.gets();
      expect(mockCategories, isA<List<Category>>());
    });

    test('get test', () async {
      const id = 1;

      when(mockCategoryDao.getCategory(id)).thenAnswer(
            (_) async => categories.firstWhere((element) => element.id == id),
      );

      final category = await categoryRepository.get(id);

      expect(category, isA<Category>());
      expect(category.id, id);
    });


    test('insert test', () async {

      final newCategory = Category(id: 4,name: '새로운 카테고리', color: 4, type: CategoryType.spending);

      when(mockCategoryDao.insertCategory(newCategory)).thenAnswer((_) async {
        categories.add(newCategory);
      });

      await categoryRepository.insert(newCategory);

      expect(newCategory, categories.last);
    });

    test('delete test', () async {
      const id = 1;

      when(mockCategoryDao.deleteCategory(id)).thenAnswer((_) async {
        categories.removeWhere((element) => element.id == id);
      });

      await categoryRepository.delete(id);

      // 존재 여부 확인
      expect(categories.where((element) => element.id == id).isEmpty, true);

    });

    test('update test', () async {
      const updatedCategoryName = '수정된 카테고리';
      final updatedCategory = categories.first.copyWith(name: updatedCategoryName);

      when(mockCategoryDao.updateCategory(updatedCategory)).thenAnswer((_) async {
        categories[categories.indexWhere((e) => e.id == updatedCategory.id)] = updatedCategory;
      });

      await categoryRepository.update(updatedCategory);
      expect(updatedCategory, categories.first);

    });

  });
}

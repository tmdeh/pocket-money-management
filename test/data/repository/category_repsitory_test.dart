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
      final category = await categoryRepository.get(id);

      when(mockCategoryDao.getCategory(1)).thenAnswer(
            (_) async => categories.firstWhere((element) => element.id == id),
      );

      expect(category, isA<Category>());
      expect(category.id, id);
    });


    test('insert test', () async {

      const updatedCategoryName = '수정된 카테고리';
      final updatedCategory = categories.first.copyWith(name: updatedCategoryName);

    });

    test('delete test', () async {

    });

    test('update test', () async {

    });

  });
}

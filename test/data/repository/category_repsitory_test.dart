
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:pocket_money_management_app/data/data_source/dao/category.dart';
import 'package:pocket_money_management_app/data/repository/category_repository_impl.dart';
import 'package:pocket_money_management_app/di/setup.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

import 'category_repsitory_test.mocks.dart';

@GenerateMocks([CategoryDao])
void main() {
  late CategoryRepository categoryRepository;

  setUp(() {
    categoryRepository = CategoryRepositoryImpl(MockCategoryDao());
  });

  test('category repository gets test', () async {
  });
}
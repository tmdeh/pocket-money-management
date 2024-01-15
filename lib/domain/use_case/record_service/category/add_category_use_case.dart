

import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

class AddCategoryUseCase {

  final CategoryRepository _categoryRepository;

  AddCategoryUseCase(this._categoryRepository);

  Future<void> call(Category data) async {
    await _categoryRepository.insert(data);
  }
}
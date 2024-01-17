

import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

@singleton
class UpdateCategoryUseCase {

  final CategoryRepository _categoryRepository;

  UpdateCategoryUseCase(this._categoryRepository);

  Future<void> call(Category data) async {
    await _categoryRepository.update(data);
  }

}
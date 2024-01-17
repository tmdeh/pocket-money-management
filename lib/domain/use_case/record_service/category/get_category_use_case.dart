

import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/repository/category_repository.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';

@singleton
class GetCategoryUseCase {
  final CategoryRepository _categoryRepository;

  GetCategoryUseCase(this._categoryRepository);

  Future<Category> call(int id) async {
    return await _categoryRepository.get(id);
  }

}


import 'package:pocket_money_management_app/domain/repository/category_repository.dart';

class DeleteCategoryUseCase {

  final CategoryRepository _categoryRepository;

  DeleteCategoryUseCase(this._categoryRepository);

  Future<void> call(int id) async {
    await _categoryRepository.delete(id);
  }

}
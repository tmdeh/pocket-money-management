import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pocket_money_management_app/core/category_type.dart';

part 'category.freezed.dart';
part 'category.g.dart';

@freezed
class Category with _$Category {
  factory Category({
    int? id,
    required String name,
    required CategoryType type,
    required int color,
  }) = _Category;

  factory Category.fromJson(Map<String, dynamic> json) =>
      _$CategoryFromJson(json);
}
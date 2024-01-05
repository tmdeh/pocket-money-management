


import 'package:drift/drift.dart';
import 'package:pocket_money_management_app/core/category_type.dart';

class Category extends Table {

  // 아이디
  IntColumn get id => integer().autoIncrement()();

  // 색
  IntColumn get color => integer()();

  // 소비, 지출 타입
  TextColumn get type => textEnum<CategoryType>()();
}




import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/domain/model/category.dart';


final List<Category> defaultCategories = [
  Category(name: '식비', type: CategoryType.spending, color: Colors.red.value),
  Category(name: '교통비', type: CategoryType.spending, color: Colors.lightBlue.value),
  Category(name: '의료비', type: CategoryType.spending, color: Colors.orange.value),
  Category(name: '저축', type: CategoryType.spending, color: Colors.deepPurpleAccent.value),
  Category(name: '월급', type: CategoryType.income, color: Colors.blue.value),
  Category(name: '용돈', type: CategoryType.income, color: Colors.amber.value),
  Category(name: '보너스', type: CategoryType.income, color: Colors.green.value),
];
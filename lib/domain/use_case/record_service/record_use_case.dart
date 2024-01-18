import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/category/add_category_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/category/delete_category_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/category/get_categories_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/category/get_category_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/category/update_category_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/payment_type/add_payment_type_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/payment_type/delete_payment_type_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/payment_type/get_payment_type_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/payment_type/get_payment_types_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/payment_type/update_payment_type_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record/add_record_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record/delete_record_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record/get_record_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record/get_records_use_case.dart';
import 'package:pocket_money_management_app/domain/use_case/record_service/record/update_record_use_case.dart';

@singleton
class RecordUseCase {
  final GetRecordUseCase getRecord;
  final GetReCordsUseCase getReCords;
  final GetPaymentTypesUseCase getPaymentTypes;
  final GetPaymentTypeUseCase getPaymentType;
  final GetCategoriesUseCase getCategories;
  final GetCategoryUseCase getCategory;

  final AddRecordUseCase addRecord;
  final AddCategoryUseCase addCategory;
  final AddPaymentTypeUseCase addPayment;

  final UpdateRecordUseCase updateRecord;
  final UpdateCategoryUseCase updateCategory;
  final UpdatePaymentTypeUseCase paymentType;

  final DeleteRecordUseCase deleteRecord;
  final DeleteCategoryUseCase deleteCategory;
  final DeletePaymentTypeUseCase deletePayment;

  RecordUseCase({
    required this.getRecord,
    required this.getReCords,
    required this.getPaymentTypes,
    required this.getPaymentType,
    required this.getCategories,
    required this.getCategory,
    required this.addRecord,
    required this.addCategory,
    required this.addPayment,
    required this.updateRecord,
    required this.updateCategory,
    required this.paymentType,
    required this.deleteRecord,
    required this.deleteCategory,
    required this.deletePayment,
  });
}

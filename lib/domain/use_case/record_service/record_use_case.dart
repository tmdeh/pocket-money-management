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

  RecordUseCase(
      this.getRecord,
      this.getReCords,
      this.getPaymentTypes,
      this.getPaymentType,
      this.getCategories,
      this.getCategory,
      this.addRecord,
      this.addCategory,
      this.addPayment,
      this.updateRecord,
      this.updateCategory,
      this.paymentType,
      this.deleteRecord,
      this.deleteCategory,
      this.deletePayment);
}
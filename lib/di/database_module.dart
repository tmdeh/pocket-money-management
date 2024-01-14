
import 'package:injectable/injectable.dart';
import 'package:pocket_money_management_app/data/data_source/database_setup.dart';

@module
abstract class RegisterDatabaseModule {
  @preResolve
  Future<Database> get database async => Database(null);
}
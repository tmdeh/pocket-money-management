import 'package:flutter_test/flutter_test.dart';
import 'package:pocket_money_management_app/data/database_setup.dart';

void main() async {

  late Database database;


  setUp(() {
    database = Database();
  });

  tearDown(() async {
    database.close();
  });


  test('데이터베이스가 제대로 생성되는지 테스트', () async {
    final tables = database.allTables.toList();
    expect(tables.length, 3);
  });
}

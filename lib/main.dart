import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:pocket_money_management_app/presentation/theme.dart';
import 'package:pocket_money_management_app/router.dart';
import 'package:pocket_money_management_app/di/setup.dart';

void main() async {
  // 플랫폼 채널의 위젯 바인딩을 보장한다.
  WidgetsFlutterBinding.ensureInitialized();

  await initializeDateFormatting();

  // 의존성 주입
  await configureDependencies();

  runApp(const MyApp());
 }

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: router,
      theme: theme
    );
  }
}

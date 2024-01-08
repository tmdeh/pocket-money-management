import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:pocket_money_management_app/di/setup.dart';
import 'package:pocket_money_management_app/presentaion/component/bottom_navigation.dart';
import 'package:pocket_money_management_app/presentaion/thema/dark.dart';
import 'package:pocket_money_management_app/presentaion/thema/light.dart';

void main() async {
  // 플랫폼 채널의 위젯 바인딩을 보장한다.
  WidgetsFlutterBinding.ensureInitialized();

  // 의존성 주입
  configureDependencies();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      theme: lightTheme,
      darkTheme: darkTheme,
      home: BottomNavigator()
    );
  }
}

import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/component/bottom_navigation.dart';
import 'package:pocket_money_management_app/thema/dark.dart';
import 'package:pocket_money_management_app/thema/light.dart';

void main() {
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

import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/presentaion/component/bottom_navigation.dart';
import 'package:pocket_money_management_app/presentaion/thema/dark.dart';
import 'package:pocket_money_management_app/presentaion/thema/light.dart';

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

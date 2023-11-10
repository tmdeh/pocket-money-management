import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';
import 'package:pocket_money_management_app/repository/memory_record_repository.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';
import 'package:pocket_money_management_app/screens/splash.dart';
import 'package:pocket_money_management_app/thema/dark.dart';
import 'package:pocket_money_management_app/thema/light.dart';

void main() {
  GetIt.I.registerSingleton<RecordRepository>(MemoryRepository());
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: lightTheme,
      darkTheme: darkTheme,
      home: const SplashScreen()
    );
  }
}

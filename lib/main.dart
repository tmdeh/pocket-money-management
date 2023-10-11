import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/screens/detail.dart';
import 'package:pocket_money_management_app/screens/home.dart';
import 'package:pocket_money_management_app/screens/settings.dart';
import 'package:pocket_money_management_app/screens/shopping.dart';
import 'package:pocket_money_management_app/screens/stats.dart';

void main() {
  runApp(const MyApp());
}


final darkTheme = ThemeData(

);
final lightTheme = ThemeData(
  primaryColor: Colors.black
);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      initialRoute: '/',
      theme: lightTheme,
      darkTheme: darkTheme,
      home: BottomNavigator()
    );
  }
}

class BottomNavigator extends StatelessWidget {
   BottomNavigator({Key? key}) : super(key: key);

  final List<Widget> _widgetOptions = [
    const HomeScreen(),
    const StatsScreen(),
    const ShoppingScreen(),
    const SettingScreen()
  ];


  final List<Widget> _tabs = [
    const Tab(
       icon: Icon(Icons.home)
    ),
    const Tab(
      icon: Icon(Icons.pie_chart),
    ),
    const Tab(
      icon: Icon(Icons.shopping_cart),
    ),
    const Tab(
      icon: Icon(Icons.settings),
    )
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 1,
      length: _tabs.length,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("용돈 관리"),
        ),
        bottomNavigationBar: TabBar(
          tabs: _tabs,
          indicatorColor: Colors.transparent,
          unselectedLabelColor: Colors.grey,
          labelColor: Colors.black,
        ),
        body: TabBarView(
          children: _widgetOptions,
        ),
      ),
    );
  }
}

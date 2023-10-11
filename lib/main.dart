import 'package:flutter/material.dart';
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

const double iconHeight = 60.0;

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

class BottomNavigator extends StatelessWidget {
   BottomNavigator({Key? key}) : super(key: key);


   String _getTitle() {
     DateTime date = DateTime.now();

     int month = date.month;
     int year = date.year;

     return "$year년 $month월";
   }

  final List<Widget> _widgetOptions = [
    const HomeScreen(),
    const StatsScreen(),
    const ShoppingScreen(),
    const SettingScreen()
  ];



  final List<Widget> _tabs = [
    const Tab(
       icon: Icon(Icons.home),
        height: iconHeight,
    ),
    const Tab(
      icon: Icon(Icons.pie_chart),
      height: iconHeight,
    ),
    const Tab(
      icon: Icon(Icons.shopping_cart),
      height: iconHeight,
    ),
    const Tab(
      icon: Icon(Icons.settings),
      height: iconHeight,
    )
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 1,
      length: _tabs.length,
      child: Scaffold(
        appBar: AppBar(
          title: Text(_getTitle()),
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
        floatingActionButton: FloatingActionButton(
          onPressed: () {

          },
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/screens/home.dart';
import 'package:pocket_money_management_app/screens/settings.dart';
import 'package:pocket_money_management_app/screens/shopping.dart';
import 'package:pocket_money_management_app/screens/stats.dart';

class BottomNavigation extends StatefulWidget {
  const BottomNavigation({super.key});

  @override
  State<BottomNavigation> createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigation> {

  int selectedIndex = 0;

  String _getTitle() {
    DateTime date = DateTime.now();
    return "${date.year}년 ${date.month}월";
  }

  final List<Widget> _widgetOptions = [
    HomeScreen(),
    const StatsScreen(),
    const ShoppingScreen(),
    const SettingScreen()
  ];


  void onAddButton() {

  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_getTitle()),
      ),
      body: Center(
        child: IndexedStack(
          index: selectedIndex,
          children: _widgetOptions,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: onAddButton,
        child: const Icon(Icons.add),
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: selectedIndex,
        onDestinationSelected: (value) => setState(() {
          selectedIndex = value;
        }),
        animationDuration: const Duration(milliseconds: 500),
        destinations: [
          NavigationDestination(
            icon: const Icon(Icons.home),
            label: "홈",
            selectedIcon: Icon(
              Icons.home,
              color: Theme.of(context).colorScheme.onSecondaryContainer,
            ),
          ),
          NavigationDestination(
            icon: const Icon(Icons.pie_chart),
            label: "통계",
            selectedIcon: Icon(
              Icons.pie_chart,
              color: Theme.of(context).colorScheme.onSecondaryContainer,
            ),
          ),
          NavigationDestination(
            icon: const Icon(Icons.shopping_cart),
            label: "쇼핑",
            selectedIcon: Icon(
              Icons.shopping_cart,
              color: Theme.of(context).colorScheme.onSecondaryContainer,
            ),
          ),
          NavigationDestination(
            icon: const Icon(Icons.settings),
            label: "설정",
            selectedIcon: Icon(
              Icons.settings,
              color: Theme.of(context).colorScheme.onSecondaryContainer,
            ),
          ),
        ],
      ),
    );
  }
}

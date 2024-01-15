import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_screen.dart';
import 'package:pocket_money_management_app/presentation/screens/settings.dart';
import 'package:pocket_money_management_app/presentation/screens/shopping.dart';
import 'package:pocket_money_management_app/presentation/screens/stats.dart';

final router = GoRouter(
  initialLocation: '/home',
  routes: [
    StatefulShellRoute.indexedStack(
        builder: (BuildContext context, GoRouterState state,
            StatefulNavigationShell navigationShell) {
          return Scaffold(
            body: navigationShell,
            bottomNavigationBar: BottomNavigationBar(
              items: const [
                BottomNavigationBarItem(
                  icon: Icon(Icons.home),
                  label: '홈',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.pie_chart),
                  label: '통계',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.shopping_cart),
                  label: '쇼핑',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.settings),
                  label: '설정',
                ),
              ],
              currentIndex: navigationShell.currentIndex,
              onTap: (int index) {
                navigationShell.goBranch(index);
              },
              selectedItemColor: Theme.of(context).primaryColor,
              showUnselectedLabels: true,
              unselectedLabelStyle:
                  TextStyle(color: Theme.of(context).unselectedWidgetColor),
              unselectedItemColor: Theme.of(context).unselectedWidgetColor,
              type: BottomNavigationBarType.fixed,
            ),
          );
        },
        branches: <StatefulShellBranch>[
          StatefulShellBranch(
            routes: <RouteBase>[
              GoRoute(
                path: '/home',
                builder: (BuildContext context, GoRouterState state) =>
                    const HomeScreen(),
              ),
            ],
          ),
          StatefulShellBranch(routes: <RouteBase>[
            GoRoute(
              path: '/stats',
              builder: (BuildContext context, GoRouterState state) =>
                  const StatsScreen(),
            ),
          ]),
          StatefulShellBranch(routes: <RouteBase>[
            GoRoute(
              path: '/shopping',
              builder: (BuildContext context, GoRouterState state) =>
                  const ShoppingScreen(),
            ),
          ]),
          StatefulShellBranch(routes: <RouteBase>[
            GoRoute(
              path: '/settings',
              builder: (BuildContext context, GoRouterState state) =>
                  const SettingScreen(),
            ),
          ]),
        ]),
  ],
);

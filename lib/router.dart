import 'package:go_router/go_router.dart';
import 'package:pocket_money_management_app/di/setup.dart';
import 'package:pocket_money_management_app/presentation/screens/home_screen.dart';
import 'package:pocket_money_management_app/presentation/screens/view_model/home_view_model.dart';
import 'package:provider/provider.dart';

final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) {
        return ChangeNotifierProvider(
          create: (_) => getIt<HomeViewModel>(),
          child: const HomeScreen(),
        );
      }
    ),
  ],
);
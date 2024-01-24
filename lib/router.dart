import 'package:go_router/go_router.dart';
import 'package:pocket_money_management_app/di/setup.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/add_record_screen.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/add_record_view_model.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_screen.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_view_model.dart';
import 'package:provider/provider.dart';

final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => ChangeNotifierProvider(
        child: const HomeScreen(),
        create: (context) => getIt<HomeViewModel>(),
      ),
      routes: [
        GoRoute(
          path: 'add',
          builder: (context, state) => ChangeNotifierProvider(
            child: const AddRecordScreen(),
            create: (context) => getIt<AddRecordViewModel>(),
          )
        )
      ]
    )
  ]
);

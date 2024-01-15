import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/presentation/screens/home/home_view_model.dart';
import 'package:provider/provider.dart';
import 'package:table_calendar/table_calendar.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    final viewModel = context.watch<HomeViewModel>();
    final state = viewModel.state;

    return Scaffold(
      body: Column(
        children: [
          Flexible(
            flex: 1,
            child: TableCalendar(
              firstDay: DateTime.utc(2010, 10, 16),
              lastDay: DateTime.utc(2030, 3, 14),
              focusedDay: DateTime.now(),
              locale: 'ko',
              rowHeight: 45,
            ),
          ),
          Flexible(
            flex: 1,
            child: Container(
              color: Colors.black,
            ),
          ),
        ],
      ),
    );
  }
}

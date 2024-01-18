import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/presentation/screens/home/calender_event.dart';
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
              focusedDay: state.focusedDate,
              currentDay: state.focusedDate,
              calendarStyle: const CalendarStyle(
                isTodayHighlighted: true,
                markerSize: 100.0,
              ),
              locale: 'ko',
              rowHeight: 40,
              headerStyle: const HeaderStyle(
                formatButtonVisible: false,
                titleCentered: true,
              ),
              onDaySelected: (selectedDay, focusedDay) {
                viewModel.onEvent(CalenderEvent.onTapDay(focusedDay));
              }
            ),
          ),
          Flexible(
            flex: 1,
            child: Container(
              color: Colors.grey,
              child: Text(state.focusedDate.toString()),
            ),
          ),
        ],
      ),
    );
  }
}

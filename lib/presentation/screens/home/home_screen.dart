import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
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
      appBar: AppBar(),
      drawer: Drawer(
        child: ListView(
          children: [
            ListTile(
              title: const Text("카테고리 관리"),
              onTap: () {},
            ),
            ListTile(
              title: const Text("이용수단 관리"),
              onTap: () {},
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.push('/add'),
        backgroundColor: Theme.of(context).primaryColor,
        foregroundColor: Colors.white,
        shape: const CircleBorder(),
        child: const Icon(Icons.add),
      ),
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

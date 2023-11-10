
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/component/home/Recent.dart';
import 'package:pocket_money_management_app/component/home/record_list.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Recent(),
        RecordList(),
      ],
    );
  }
}

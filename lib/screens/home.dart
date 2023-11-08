
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/component/home/Recent.dart';
import 'package:pocket_money_management_app/component/home/record_list.dart';
import 'package:pocket_money_management_app/repository/mock_record_repository.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final records = MockRecordRespository().getRecords();

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

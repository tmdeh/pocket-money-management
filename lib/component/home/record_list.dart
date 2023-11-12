import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';
import 'package:pocket_money_management_app/component/home/record_item.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';

class RecordList extends StatelessWidget {

  const RecordList({super.key});

  @override
  Widget build(BuildContext context) {
    var recordRepository = GetIt.instance<RecordRepository>();

    var records = recordRepository.getList();

    return Flexible(
      flex: 13,
      child: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15),
        child: ListView.builder(
          itemCount: records.length,
          itemBuilder:  (context, index) {
            return Padding(
              padding: const EdgeInsets.only(bottom: 15),
              child: RecordItem(
                category: records[index].category,
                memo: records[index].memo,
                payDate: records[index].dateTime,
                price: records[index].price,
                type: records[index].type,
              ),
            );
          }
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';
import 'package:pocket_money_management_app/component/home/record_item.dart';
import 'package:pocket_money_management_app/model/record.dart';
import 'package:pocket_money_management_app/repository/mock_record_repository.dart';
import 'package:pocket_money_management_app/repository/record_repository.dart';

class RecordList extends StatelessWidget {

  // TODO: 파라미터로 리스트 받아오기

  const RecordList({super.key});



  @override
  Widget build(BuildContext context) {
    var recordRepository = GetIt.instance<RecordRepository>();

    var records = recordRepository.getRecordList();

    print(records);

    return Flexible(
      flex: 13,
      child: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15),
        child: ListView.builder(
          itemCount: records.length,
          itemBuilder:  (context, index) {
            
          }
        ),
          // TODO: 리스트 빌더로 리스트 뷰 구현
        //   child: ListView(
        //     children: [
        //     RecordItem(
        //       category: "식비",
        //       price: 3000,
        //       memo: "라면라면라면라면라면라면라면라면라면",
        //       payDate: DateTime.now(),
        //       type: RecordType.spend,
        //     ),
        //     const SizedBox(height: 15,),
        //     RecordItem(
        //       category: "식비",
        //       price: 3000,
        //       memo: "가나다라마바사아자차카마파아",
        //       payDate: DateTime.now(),
        //       type: RecordType.spend,
        //     ),
        //   ],
        // ),
      ),
    );
  }
}

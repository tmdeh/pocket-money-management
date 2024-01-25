import 'package:currency_text_input_formatter/currency_text_input_formatter.dart';
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/presentation/screens/home/add_record/add_record_view_model.dart';
import 'package:provider/provider.dart';
import 'package:pocket_money_management_app/domain/model/record.dart';

class AddRecordScreen extends StatefulWidget {
  const AddRecordScreen({super.key, this.record});

  final Record? record;

  @override
  State<AddRecordScreen> createState() => _AddRecordScreenState();
}

class _AddRecordScreenState extends State<AddRecordScreen> {
  final _memoController = TextEditingController();
  final _nameController = TextEditingController();
  final _priceController = TextEditingController();

  @override
  void initState() {
    super.initState();
    Future.microtask(() {
      final _viewModel = context.read<AddRecordViewModel>();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('기록 추가하기'),
      ),
      body: Padding(
        padding: const EdgeInsets.only(left: 30.0, right: 30.0),
        child: Column(
          children: [
            TextField(
              keyboardType: const TextInputType.numberWithOptions(),
              controller: _priceController,
              inputFormatters: [
                CurrencyTextInputFormatter(
                  locale: 'ko',
                  decimalDigits: 0,
                  symbol: '￦',
                ),
              ],
              decoration: const InputDecoration(
                hintText: '￦ 2,000',
              ),
            ),
            // Select category type
            Row(
              children: [],
            ),
            //name text field
            TextField(
              controller: _nameController,
              maxLines: 1,
              maxLength: 30,
              decoration: const InputDecoration(
                hintText: "이름",
              ),
            ),
            // memo text field
            TextField(
              controller: _memoController,
              keyboardType: TextInputType.multiline,
              maxLines: 5,
              decoration: const InputDecoration(
                hintText: "메모",
              ),
            ),
          ],
        ),
      ),
    );
  }
}

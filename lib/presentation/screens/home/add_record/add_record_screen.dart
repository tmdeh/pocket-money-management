import 'package:currency_text_input_formatter/currency_text_input_formatter.dart';
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/core/category_type.dart';
import 'package:pocket_money_management_app/core/default_category.dart';
import 'package:pocket_money_management_app/core/default_payment_type.dart';
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

  final _priceFocusNode = FocusNode();
  final _nameFocusNode = FocusNode();
  final _memoFocusNode = FocusNode();

  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _nameFocusNode.addListener(() {
      if (_nameFocusNode.hasFocus) {
        if (_scrollController.hasClients) {
          _scrollController.animateTo(120,
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeIn);
        }
      }
    });

    _memoFocusNode.addListener(() {
      if (_memoFocusNode.hasFocus) {
        if (_scrollController.hasClients) {
          _scrollController.animateTo(300,
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeIn);
        }
      }
    });

    Future.microtask(() {
      final viewModel = context.read<AddRecordViewModel>();
    });
  }

  @override
  void dispose() {
    _memoFocusNode.dispose();
    _nameFocusNode.dispose();
    _priceFocusNode.dispose();

    _scrollController.dispose();

    _nameController.dispose();
    _priceController.dispose();
    _memoController.dispose();
    super.dispose();
  }

  void onTapOutLine(FocusNode node) {
    node.unfocus();
    _scrollController.animateTo(0,
        duration: const Duration(milliseconds: 300), curve: Curves.easeIn);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).primaryColor,
        title: const Text(
          '기록 추가하기',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        foregroundColor: Colors.white,
      ),
      body: SafeArea(
        bottom: true,
        child: SingleChildScrollView(
          controller: _scrollController,
          physics: const NeverScrollableScrollPhysics(),
          child: Padding(
            padding: const EdgeInsets.only(left: 30.0, right: 30.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                gap(),
                // Select category type
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    categoryTypeContainer(
                        type: CategoryType.income, selected: true),
                    categoryTypeContainer(
                        type: CategoryType.spending, selected: false),
                  ],
                ),
                gap(),
                Container(
                  width: MediaQuery.of(context).size.width,
                  padding: const EdgeInsets.all(10),
                  child: DropdownButton(
                    borderRadius: const BorderRadius.all(Radius.circular(15)),
                    underline: Container(
                      height: 2,
                      color: Theme.of(context).primaryColor,
                    ),
                    style: const TextStyle(
                      fontSize: 20,
                      color: Colors.black,
                    ),
                    value: defaultCategories[0],
                    items: defaultCategories
                        .map((e) => DropdownMenuItem(
                              value: e,
                              child: Text(e.name),
                            ))
                        .toList(),
                    onChanged: (value) {},
                  ),
                ),
                Container(
                  width: MediaQuery.of(context).size.width,
                  padding: const EdgeInsets.all(10),
                  child: DropdownButton(
                    borderRadius: const BorderRadius.all(Radius.circular(15)),
                    underline: Container(
                      height: 2,
                      color: Theme.of(context).primaryColor,
                    ),
                    style: const TextStyle(
                      fontSize: 20,
                      color: Colors.black,
                    ),
                    value: defaultPaymentTypes[0],
                    items: defaultPaymentTypes
                        .map((e) => DropdownMenuItem(
                              value: e,
                              child: Text(e.name),
                            ))
                        .toList(),
                    onChanged: (value) {},
                  ),
                ),
                gap(),
                TextField(
                  keyboardType: const TextInputType.numberWithOptions(),
                  controller: _priceController,
                  focusNode: _priceFocusNode,
                  onTapOutside: (_) => onTapOutLine(_priceFocusNode),
                  inputFormatters: [
                    CurrencyTextInputFormatter(
                      locale: 'ko',
                      decimalDigits: 0,
                      symbol: '￦',
                    ),
                  ],
                  decoration: InputDecoration(
                    hintText: '￦ 2,000',
                    border: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(15.0),
                      ),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: const BorderRadius.all(
                        Radius.circular(15.0),
                      ),
                      borderSide:
                          BorderSide(color: Theme.of(context).primaryColor),
                    ),
                    focusedBorder: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(15.0),
                      ),
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                ),
                gap(),
                // name text field
                TextField(
                  controller: _nameController,
                  maxLines: 1,
                  maxLength: 30,
                  focusNode: _nameFocusNode,
                  textInputAction: TextInputAction.next,
                  onSubmitted: (_) {
                    FocusScope.of(context).requestFocus(_memoFocusNode);
                  },
                  onTapOutside: (_) => onTapOutLine(_nameFocusNode),
                  decoration: InputDecoration(
                    focusColor: Theme.of(context).primaryColor,
                    hintText: "이름",
                    border: const OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))),
                    focusedBorder: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(15.0)),
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                ),
                gap(),
                // memo text field
                TextField(
                  controller: _memoController,
                  keyboardType: TextInputType.multiline,
                  scrollPadding: EdgeInsets.only(
                      bottom: MediaQuery.of(context).viewInsets.bottom),
                  maxLines: 5,
                  focusNode: _memoFocusNode,
                  onTapOutside: (_) => onTapOutLine(_memoFocusNode),
                  decoration: InputDecoration(
                    focusColor: Theme.of(context).primaryColor,
                    hintText: "메모",
                    border: const OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))),
                    focusedBorder: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(15.0),
                      ),
                      borderSide: BorderSide(color: Colors.black),
                    ),
                  ),
                ),
                SizedBox(
                  height: MediaQuery.of(context).size.height,
                ),
              ],
            ),
          ),
        ),
      ),
      bottomSheet: ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
            minimumSize: const Size.fromHeight(50),
            backgroundColor: Theme.of(context).primaryColor,
            foregroundColor: Colors.white,
            shape: const BeveledRectangleBorder()),
        child: const Text(
          "추가히기",
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }

  Widget gap() {
    return const SizedBox(
      height: 20.0,
    );
  }

  Widget categoryTypeContainer({
    required CategoryType type,
    required bool selected,
  }) {
    return GestureDetector(
      onTap: () {},
      child: Container(
        width: 160,
        height: 50,
        decoration: BoxDecoration(
          color: selected ? Theme.of(context).primaryColor : Colors.white,
          border: selected
              ? null
              : Border.all(color: Theme.of(context).primaryColor),
          borderRadius: const BorderRadius.all(Radius.circular(15.0)),
        ),
        child: Center(
          child: Text(
            type == CategoryType.income ? "수입" : "지출",
            style: TextStyle(
              color: selected ? Colors.white : Colors.black,
              fontSize: 18,
            ),
          ),
        ),
      ),
    );
  }
}

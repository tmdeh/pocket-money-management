
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/model/record.dart';

class RecordItem extends StatefulWidget {

 // TODO: 수입은 흰식, 지출은 검은색 적용

  final int price;
  final String category;
  final DateTime payDate;
  final String memo;
  final RecordType type;

  const RecordItem({
    super.key,
    required this.category,
    required this.price,
    required this.memo,
    required this.payDate,
    required this.type
  });

  @override
  State<RecordItem> createState() => _TileState();
}

class _TileState extends State<RecordItem> {
  bool _isExtended = false;
  bool _isReady = false;

  late double _extendedHeight = 120.0;

  void _onTap() {
    setState(() {
      _isExtended = !_isExtended;
      if(!_isExtended) {
        _isReady = false;
      }
    });
  }
  void _onAnimationEnd() {
    setState(() {
      // 확장된 상태일 경우
      if(_isExtended) {
        _isReady = true;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _onTap,
      child: AnimatedContainer(
        height: _isExtended ? _extendedHeight : 60.0,
        duration: const Duration(milliseconds: 300),
        curve: Curves.linear,
        onEnd: _onAnimationEnd,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(15),
          boxShadow: [
            BoxShadow(
                color: Colors.grey.withOpacity(0.7),
                blurRadius: 5.0,
                spreadRadius: 2.0,
                offset: const Offset(0, 7)
            )
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _Outline(category: widget.category, price: widget.price),
              _Memo(isReady: _isReady, memo: widget.memo, payDate: widget.payDate),
            ],
          ),
        ),
      ),
    );
  }
}



class _Outline extends StatelessWidget {

  final String category;
  final int price;

  const _Outline({
    super.key,
    required this.price,
    required this.category,
  });

  final _textStyle = const TextStyle(
    fontSize: 26,
  );

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Row(
            children: [
              const Icon(Icons.add),
              const SizedBox(width: 10,),
              Text(category, style: _textStyle),
            ],
          ),
          const SizedBox(width: 10,),
          Text('${price}원', style: _textStyle),
        ],
      ),
    );
  }
}




class _Memo extends StatelessWidget {

  final bool isReady;
  final String memo;
  final DateTime payDate;


  const _Memo({
    super.key,
    required this.memo,
    required this.payDate,
    required this.isReady,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedOpacity(

      opacity: isReady ? 1.0 : 0,
      duration: const Duration(milliseconds: 300),
      child: Visibility(
        visible: isReady,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "${payDate.day}일 ${payDate.hour}시 ${payDate.minute}분",
            ),
            const SizedBox(height: 15,),
            Text(
              memo,
              style: const TextStyle(
                fontSize: 24
              ),
            ),
          ],
        ),
      ),
    );
  }
}



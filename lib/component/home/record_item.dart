
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/model/record.dart';

class RecordItem extends StatefulWidget {

 // TODO: primary 색 지정

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

  final double _extendedHeight = 140.0;

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
        duration: const Duration(milliseconds: 150),
        curve: Curves.linear,
        onEnd: _onAnimationEnd,
        decoration: BoxDecoration(
          color: widget.type == RecordType.income ?
            Theme.of(context).colorScheme.primaryContainer :
            Theme.of(context).colorScheme.tertiaryContainer,
          borderRadius: BorderRadius.circular(15),
        ),
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _Outline(
                category: widget.category,
                price: widget.price,
                type: widget.type,
              ),
              _Memo(
                isReady: _isReady,
                memo: widget.memo,
                payDate: widget.payDate,
                type: widget.type,
              ),
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
  final RecordType type;

  const _Outline({
    super.key,
    required this.price,
    required this.category,
    required this.type,
  });


  @override
  Widget build(BuildContext context) {

    final textStyle = TextStyle(
      fontSize: 26,
      color: type == RecordType.income ?
        Theme.of(context).colorScheme.primary :
        Theme.of(context).colorScheme.tertiary
    );

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        Row(
          children: [
             Icon(
              Icons.add,
              color: type == RecordType.income ?
                Theme.of(context).colorScheme.primary :
                Theme.of(context).colorScheme.tertiary,
            ),
            const SizedBox(width: 10,),
            Text(category, style: textStyle),
          ],
        ),
        const SizedBox(width: 10,),
        Text('$price원', style: textStyle),
      ],
    );
  }
}




class _Memo extends StatelessWidget {

  final bool isReady;
  final String memo;
  final DateTime payDate;
  final RecordType type;


  const _Memo({
    super.key,
    required this.memo,
    required this.payDate,
    required this.isReady,
    required this.type,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedOpacity(
      opacity: isReady ? 1.0 : 0,
      duration: const Duration(milliseconds: 150),
      child: Visibility(
        visible: isReady,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "${payDate.day}일 ${payDate.hour}시 ${payDate.minute}분",
              style: TextStyle(
                color: type == RecordType.income ?
                  Theme.of(context).colorScheme.primary :
                  Theme.of(context).colorScheme.tertiary,
              ),
            ),
            const SizedBox(height: 5,),
            Text(
              memo,
              style: TextStyle(
                color: type == RecordType.income ?
                  Theme.of(context).colorScheme.primary :
                  Theme.of(context).colorScheme.tertiary,
                fontSize: 24
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ),
      ),
    );
  }
}



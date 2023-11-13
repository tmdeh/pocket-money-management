

import 'package:flutter/material.dart';


class _Text extends StatelessWidget {
  final String text;
  final bool isBold;
  final double size;

  const _Text({
    super.key,
    required this.text,
    required this.size,
    required this.isBold
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        fontSize: size,
        fontWeight: isBold ? FontWeight.bold : FontWeight.normal
      ),
    );
  }
}




class Recent extends StatelessWidget {

  const Recent({
    super.key,
  });


  @override
  Widget build(BuildContext context) {
    return Flexible(
      flex: 7,
      child: Padding(
        padding: const EdgeInsets.all(15),
        child: Container(
          width: MediaQuery.of(context).size.width,
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.primaryContainer,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Container(
            padding: const EdgeInsets.only(left: 20),
            child: const Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _Text(text: '남은 돈: 2000원', size: 36, isBold: true),
                _Text(text: '수입: 2000원', size: 28, isBold: false),
                _Text(text: '지출: 2000원', size: 28, isBold: false)
              ],
            ),
          ),
        ),
      ),
    );
  }
}
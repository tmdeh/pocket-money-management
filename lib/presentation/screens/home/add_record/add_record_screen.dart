

import 'package:flutter/material.dart';

class AddRecordScreen extends StatelessWidget {
  const AddRecordScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('기록 추가하기'),
      ),
      body: const Center(
        child: Text('추가하기'),
      ),
    );
  }
}

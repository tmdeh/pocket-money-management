import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:flutter/material.dart';
import 'package:pocket_money_management_app/component/bottom_navigation.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedSplashScreen(
      splash: const Scaffold(
        body: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                CircularProgressIndicator(),
                SizedBox(height: 15,),
                Text("loading..."),
              ],
            ),
          ],
        ),
      ),
      nextScreen: BottomNavigation(),
      animationDuration: const Duration(microseconds: 500),
      function: () async {
        // TODO: 앱에 필요한 작업들 추가
        await Future.delayed(const Duration(seconds: 2));
      },
      splashTransition: SplashTransition.slideTransition,
    );
  }
}

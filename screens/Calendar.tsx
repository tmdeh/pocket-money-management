import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { PlusButton, SubtractButton } from "../Components";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {
  return (
    <View style={style.container}>
      <Text>캘린더 화면</Text>
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

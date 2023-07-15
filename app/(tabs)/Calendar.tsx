import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusButton, SubtractButton } from "../../components";

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

import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import PlusButton from "../components/PlusButton";
import SubtractButton from "../components/SubtractButton";

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default function HomeScreen(): JSX.Element {
  return (
    <View style={style.view}>
      <Text>홈 화면</Text>
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

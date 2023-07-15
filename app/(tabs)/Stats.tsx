import React from "react";
import { PlusButton, SubtractButton } from "../../components";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function StatsScreens(): JSX.Element {
  return (
    <View style={style.container}>
      <Text>통계 화면</Text>
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

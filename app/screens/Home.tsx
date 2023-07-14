import React from "react";
import { StyleSheet, View } from "react-native";
import MoneyStats from "../components/Home/MoneyStats";
import Recent from "../components/Home/Recent";
import { PlusButton, SubtractButton } from "../components";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen(): JSX.Element {
  return (
    <View style={style.container}>
      <MoneyStats />
      <Recent />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

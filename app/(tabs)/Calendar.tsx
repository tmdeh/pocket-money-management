import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusButton, SubtractButton } from "../../components";
import Calender from "../../components/Calender/Calender";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {
  return (
    <View style={style.container}>
      <Calender />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

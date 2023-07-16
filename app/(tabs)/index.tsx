import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MoneyStats from "../../components/Home/MoneyStats";
import Recent from "../../components/Home/Recent";
import { PlusButton, SubtractButton } from "../../components";
import {
  DBContext,
  insertCategory,
} from "../../context/sqlite";

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

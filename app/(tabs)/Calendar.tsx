import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusButton, SubtractButton } from "../../components";
import Calender from "../../components/Calender/Calender";
import Info from "../../components/Calender/Info";
import { SafeAreaView } from "react-native-safe-area-context";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {


  const [seletDate, setSelectDate] = useState<string>("");

  return (
    <SafeAreaView style={style.container}>
      <Calender />
      <Info />
      <PlusButton />
      <SubtractButton />
    </SafeAreaView>
  );
}

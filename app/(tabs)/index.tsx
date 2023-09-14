import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MoneyStats from "../../components/Home/MoneyStats";
import { PlusButton, SubtractButton } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Recent from "../../components/Recent";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});

export default function HomeScreen(): JSX.Element {
  const historyData = useSelector((state: RootState) => {
    return state.history
  })


  useEffect(() => {
    // console.log("historyData", historyData)
  }, [historyData])

  return (
    <View style={style.container}>
      <MoneyStats left={0} income={0} spending={0} />
      <Recent list={[]} />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MoneyStats from "../../components/Home/MoneyStats";
import { PlusButton, SubtractButton } from "../../components";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Recent from "../../components/Recent";
import { useDispatch } from "react-redux";
import { historyAsyncLoad } from "../../redux/slice/history";

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

  const {year, month} = useSelector((state: RootState) => {
    return state.header
  })

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(historyAsyncLoad({year, month}));
  }, [year, month])

  return (
    <View style={style.container}>
      <MoneyStats left={historyData.left} income={historyData.income} spending={historyData.spending} />
      <Recent list={historyData.history} />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

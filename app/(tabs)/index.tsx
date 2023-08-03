import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MoneyStats from "../../components/Home/MoneyStats";
import Recent from "../../components/Home/Recent";
import { PlusButton, SubtractButton } from "../../components";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { History, HistoryStatus, historyAsyncLoad } from "../../redux/slice/history";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});

export default function HomeScreen(): JSX.Element {

  const dispatch = useDispatch<AppDispatch>()

  const historyData: History = useSelector((state: RootState) => {
    return state.history
  })

  async function checkLocalSorage() {
    const keys = await AsyncStorage.getAllKeys()
    if (!(keys.find(v => v === "history"))) {
      const initialState = {
        state: HistoryStatus.LOADING,
        left: 0,
        spending: 0,
        income: 0,
        history: []
      };
      await AsyncStorage.setItem("history", JSON.stringify(initialState));
    } else {
      dispatch(historyAsyncLoad())
    }
  }

  useEffect(() => {
    checkLocalSorage()
  }, [])

  return (
    <View style={style.container}>
      <MoneyStats left={historyData.left} income={historyData.income} spending={historyData.spending} />
      <Recent list={historyData.history} />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

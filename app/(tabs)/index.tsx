import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MoneyStats from "../../components/Home/MoneyStats";
import Recent from "../../components/Home/Recent";
import { PlusButton, SubtractButton } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { History, HitoryStatus } from "../../redux/slice/history";
import AsyncStorage from "@react-native-async-storage/async-storage";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen(): JSX.Element {

  const historyData: History = useSelector((state: RootState) => {
    return state.history
  })

  async function checkLocalSorage() {
    if (!("history" in await AsyncStorage.getAllKeys())) {
      const initialState = {
        state: HitoryStatus.LOADING,
        left: 0,
        spending: 0,
        income: 0,
        history: []
      };
      await AsyncStorage.setItem("history", JSON.stringify(initialState));
    }
  }

  useEffect(() => {
    checkLocalSorage()
  }, [])

  return (
    <View style={style.container}>
      <MoneyStats />
      <Recent list={historyData.history} />
      <PlusButton />
      <SubtractButton />
    </View>
  );
}

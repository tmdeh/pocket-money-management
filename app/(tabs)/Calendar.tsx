import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusButton, SubtractButton } from "../../components";
import Calender from "../../components/Calender/Calender";
import { SafeAreaView } from "react-native-safe-area-context";
import Recent from "../../components/Recent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HistoryItem } from "../../redux/slice/history";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {

  const historyList = useSelector((state: RootState) => {
    return state.history.history
  })
  
  const [seletDate, setSelectDate] = useState<string>("");  
  const [list , setList] = useState<HistoryItem[]>(historyList)


  useEffect(() => {
    setList(historyList.filter((history) => history.date === seletDate));
  }, [seletDate, historyList])
  

  return (
    <SafeAreaView style={style.container}>
      <Calender selectDate={seletDate} setSelectDate={setSelectDate} />
      <Recent list={list} />
      <PlusButton />
      <SubtractButton />
    </SafeAreaView>
  );
}

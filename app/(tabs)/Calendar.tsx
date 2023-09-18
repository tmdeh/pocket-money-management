import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlusButton, SubtractButton } from "../../components";
import Calender from "../../components/Calender/Calender";
import { SafeAreaView } from "react-native-safe-area-context";
import Recent from "../../components/Recent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getNow } from "../../module/date";
import { IMonthData, IMonthDataItem } from "../../redux/slice/history";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {

  const historyList = useSelector((state: RootState) => {
    return state.history.history
  })
  const [list , setList] = useState<IMonthDataItem[]>(historyList)
  const [seletDate, setSelectDate] = useState<string>("");  


  useEffect(() => {
    setSelectDate(getNow());
  }, [])

  useEffect(() => {
    setList(historyList.filter((history: IMonthDataItem) => history.date === seletDate));
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

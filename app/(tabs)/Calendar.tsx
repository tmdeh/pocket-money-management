import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { PlusButton, SubtractButton } from "../../components";
import Calender from "../../components/Calender/Calender";
import { SafeAreaView } from "react-native-safe-area-context";
import Recent from "../../components/Recent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getNow } from "../../module/date";
import { IMonthDataItem } from "../../redux/slice/history";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CalenderScreen(): JSX.Element {

  
  
  const history = useSelector((state: RootState) => {
    return state.history
  })
  const [list , setList] = useState<IMonthDataItem[]>([])
  const [seletDate, setSelectDate] = useState<string>("");  
  
  useEffect(() => {
    setSelectDate(getNow());
  }, [])

  useEffect(() => {
    setList(history.history.filter((v: IMonthDataItem) => {
      const selectedDay = parseInt(seletDate.split("-")[2]);
      return selectedDay === v.day;
    }))
  }, [seletDate, history])
  

  return (
    <SafeAreaView style={style.container}>
      <Calender selectDate={seletDate} setSelectDate={setSelectDate} />
      <Recent list={list} />
      <PlusButton />
      <SubtractButton />
    </SafeAreaView>
  );
}

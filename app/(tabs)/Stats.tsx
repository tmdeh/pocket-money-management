import React, { useCallback, useState } from "react";
import { PlusButton, SubtractButton } from "../../components";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "../../components/Stats/TabBar";
import { All, Month, Week } from "../../components/Stats";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HistoryItem } from "../../redux/slice/history";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  noDataText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  }
  
});

export enum StatsTab {
  ALL = 0,
  WEEKS = 1,
  MONTH = 2
}
// TODO: prop 데이터 조정
export default function StatsScreens(): JSX.Element {

  const { income, spending} = useSelector((state: RootState) => {
    return state.category
  })
  

  const [selectTab, setSelectTab] = useState<StatsTab>(StatsTab.ALL);
  const history = useSelector((state: RootState) => state.history.history)

  const render = useCallback((history: HistoryItem[]) => {
    if(history.length === 0) {
      return <Text style={styles.noDataText}>기록이 없습니다.</Text>
    }
    if(selectTab === StatsTab.WEEKS)
      return <Week />
    else if(selectTab === StatsTab.MONTH)
      return <Month />
    else 
      return <All histories={history} category={[income, spending]} />
  }, [selectTab])

  return (
    <View style={styles.container}>
      <TabBar setSelecteTab={setSelectTab} selected={selectTab}/>
        {render(history)}
        <PlusButton />
      <SubtractButton />
    </View>
  );
}

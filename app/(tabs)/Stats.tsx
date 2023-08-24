import React, { useCallback, useState } from "react";
import { PlusButton, SubtractButton } from "../../components";
import { StyleSheet, View } from "react-native";
import TabBar from "../../components/Stats/TabBar";
import { All, Month, Week } from "../../components/Stats";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HistoryItem } from "../../redux/slice/history";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export enum StatsTab {
  ALL = 0,
  WEEKS = 1,
  MONTH = 2
}

export default function StatsScreens(): JSX.Element {

  const [selectTab, setSelectTab] = useState<StatsTab>(StatsTab.ALL);
  const history = useSelector((state: RootState) => state.history.history)

  const render = useCallback((history: HistoryItem[]) => {
    if(selectTab === StatsTab.WEEKS)
      return <Week />
    else if(selectTab === StatsTab.MONTH)
      return <Month />
    else 
      return <All histories={history} />
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

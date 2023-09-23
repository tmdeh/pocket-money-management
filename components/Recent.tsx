import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IMonthDataItem } from "../redux/slice/history";
import RecentItem from "./RecentItem";
import AddEarningIcon from "../assets/icon/Earning";
import SependingIcon from "../assets/icon/Spending";

interface RecentProp {
  list: IMonthDataItem[];
}
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    width: "100%",
  },
});

export default function Recent({ list }: RecentProp) {

  const iconSize = 50;
  const EarningIcon = AddEarningIcon({ iconSize });
  const SpendingIcon = SependingIcon({ iconSize, isList: true });

  return (
    <ScrollView style={styles.container}>
      {list.map((v, i) => (
        <RecentItem
          label={
            v.type === 0
              ? EarningIcon[v.category].label
              : SpendingIcon[v.category].label
          }
          price={v.price.toLocaleString('ko-KR')}
          key={i}
          icon={
            v.type === 0
              ? EarningIcon[v.category].icon
              : SpendingIcon[v.category].icon
          }
          type={v.type}
        />
      ))}
    </ScrollView>
  );
}


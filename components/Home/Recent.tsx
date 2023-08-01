import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HistoryItem } from "../../redux/slice/history";
import RecentItem from "./RecentItem";
import AddIncomeIcon from "../../assets/icon/Income";
import SependingIcon from "../../assets/icon/Spending";

interface RecentProp {
  list: HistoryItem[];
}

export default function Recent({ list }: RecentProp) {

  const iconSize = 50;
  const IncomeIcons = AddIncomeIcon({ iconSize });
  const SpendingIcon = SependingIcon({ iconSize: iconSize });

  return (
    <ScrollView style={styles.container}>
      {list.map((v, i) => (
        <RecentItem
          label={
            v.type === 0
              ? IncomeIcons[v.category].label
              : SpendingIcon[v.category].label
          }
          price={v.price}
          key={i}
          icon={
            v.type === 0
              ? IncomeIcons[v.category].icon
              : SpendingIcon[v.category].icon
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    width: "100%",
  },
});

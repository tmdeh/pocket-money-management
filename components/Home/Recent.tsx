import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HistoryItem } from "../../redux/slice/history";
import RecentItem from "./RecentItem";

interface RecentProp {
  list: HistoryItem[];
}

export default function Recent({ list }: RecentProp) {
  return (
    <ScrollView style={styles.container}>
      {list.map((v, i) => (
        <RecentItem category={v.category} price={v.price} key={i} />
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

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IMonthDataItem } from "../../redux/slice/history";
import { Line, Pie } from "./Chart";

interface IStatsProp {
  monthData: IMonthDataItem[];
  type: "earning" | "spending";
}

const styles = StyleSheet.create({
  container: {
    flex: 0.92,
  },
  PieChartContainer: {
    flex: 0.5,
    margin: 5,
  },
  noDataContainer: {
    flex: 1
  },
  noDataText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    margin: 40
  }
});

export default function Stats({ monthData, type }: IStatsProp) {

  if(monthData.length === 0) {
    return(
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>기록이 없습니다.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pie type={type}/>
      <Line type={type}/>
    </View>
  );
}

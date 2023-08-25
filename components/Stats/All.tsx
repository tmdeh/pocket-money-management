import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HistoryItem } from "../../redux/slice/history";
import { PieChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  }
});

interface AllProps {
  histories: HistoryItem[]
}

const data = [
  {
    name: "Seoul",
    population: 215,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 280,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 853,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 1192,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

interface StatsData {
  name: string,
  population: number,
  color: string,
  legendFontColor: string,
  legendFontSize: number
}

const category = ["월급", "용돈", "보너스", "기타"]

export default function All({histories}: AllProps) {

  const [stats, setStats] = useState<StatsData[]>([]);

  useEffect(() => {
    
    let count: any = {}

    for(let history of histories) {
      let { category } = history;

      if(count[category] === undefined) { // 카테고리가 존재하지 않을 경우
        count[category] = 1;
      } else {
        count[category]++;
      }
    }
    let historyStats = []
    for(let [key, v] of Object.entries(count)) {
      const name = category[parseInt(key)]

      const newStats: StatsData = {
        name,
        population: v as number,
        color: "#" + Math.round(Math.random() * 0xffffff).toString(16),
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      }

      historyStats.push(newStats)
    }
    setStats(historyStats);
  }, [histories])

  return(
    <View style={styles.contianer}>
      <PieChart 
        width={300}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false // optional
        }}
        data={stats}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft="0"
      />
    </View>
  )
}
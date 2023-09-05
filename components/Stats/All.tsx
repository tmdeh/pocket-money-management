import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HistoryItem } from "../../redux/slice/history";
import { PieChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  },
  pieContainer: {
    alignItems: "center",
    ...Platform.select({
      ios: {
          shadowColor: 'black',
          shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    })
  },
  pieChart: {

  }
});

interface AllProps {
  histories: HistoryItem[]
}


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
        legendFontColor: "black",
        legendFontSize: 15,
      }

      historyStats.push(newStats)
    }
    setStats(historyStats);
  }, [histories])

  return(
    <View style={styles.contianer}>
      <View style={styles.pieContainer}>
        <PieChart 
          width={350}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          data={stats}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft="0" 
          style={styles.pieChart}
        />
      </View>
    </View>
  )
}
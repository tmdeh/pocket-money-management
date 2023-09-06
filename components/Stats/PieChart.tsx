import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});


export interface StatsData {
  name: string,
  population: number,
  color: string,
  legendFontColor: string,
  legendFontSize: number
}


interface pieProps {
  data: StatsData[],
  color: string
}

export default function Pie({data, color}: pieProps) {


  return (
    <View style={styles.container}>
      <PieChart 
          width={350}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          data={data}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft="0" 
        />
    </View>
  )
}
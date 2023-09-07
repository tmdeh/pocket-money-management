import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import tinycolor from "tinycolor2";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

// 라이브러리 활용을 위한 데이터
export interface PieData {
  name: string,
  population: number,
  color: string,
  legendFontColor: string,
  legendFontSize: number
}


// 정리된 데이터
export interface PieValue {

}

interface pieProps {
  propData?: Object,
  color: string
}

export default function Pie({propData, color}: pieProps) {

  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    if(!propData) {
      return;
    }
    let result = []
    let colorBrighten = 15
    for(let [category, count] of Object.entries(propData)) {
      if(count === 0) {
        continue;
      }
      result.push({
        name: category,
        population: count,
        color: tinycolor(color).darken(colorBrighten).toString(),
        lengendFontColor: "black",
        lengendFontSize: 15
      })
      colorBrighten += 15
    } 

    setData(result);

  }, [propData])

  

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
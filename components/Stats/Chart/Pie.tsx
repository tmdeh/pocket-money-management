import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import tinycolor from "tinycolor2";


export interface IPieDataItem {
  name: string;
  value: number;
  color: string;
}


interface PieProp {
  type: "earning" | "spending"
}


const styles = StyleSheet.create({
  container: {
    flex: 0.4
  }
})


export function Pie({type}: PieProp) {

  const [data, setData] = useState<IPieDataItem[]>([]);
  const monthData = useSelector((v: RootState) => v.history.history);
  const category = useSelector((v: RootState) => v.category);
  const pieConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }


  async function initPieData() {
    // 색 명도 조정을 위한 변수
    let color = 0;
    // 최종적으로 정리될 배열
    let pieData: IPieDataItem[] = [];
    // 카테고리 별 데이터를 카운트를 세기 위한 변수
    let nameCount: { [key: string]: number } = {};

    for (let i = 0; i < monthData.length; ++i) {
      const name = category[type][monthData[i].category];

      // 존재하지 않다면 새로 카운트
      if (nameCount[name] === undefined) {
        nameCount[name] = 1;
      } else {
        nameCount[name]++;
      }
    }

    for (let [category, count] of Object.entries(nameCount)) {
      pieData.push({
        color: tinycolor("gray").brighten(color).toString(),
        name: category,
        value: count,
      });
      color += 20;
    }
    setData(pieData);
  }

  useEffect(() => {
    initPieData();
  }, [type, monthData])


  return(
    <View style={styles.container}>
      <PieChart
          data={data}
          width={400}
          height={220}
          chartConfig={pieConfig}
          accessor={"value"}
          backgroundColor={"transparent"}
          paddingLeft={"0"}
        />
    </View>
  )
}
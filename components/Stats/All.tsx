import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HistoryItem } from "../../redux/slice/history";
import { PieChart } from "react-native-chart-kit";
import tinycolor from "tinycolor2";
import Pie, { StatsData } from "./PieChart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



// TODO
// 1. 수입 지출 분류
// 2. 파이차트, 선 차트 컴포넌트로 분류
// 3. 카테고리를 context로 저장
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  },
});

interface AllProps {
  histories: HistoryItem[]
}

interface IpieStats {
  income: StatsData[];
  spending: StatsData[];
}


export default function All({histories}: AllProps) {

  const categoryIncome = useSelector((state: RootState) => {
    return state.categoryIncome.category
  })
  
  const categorySpending = useSelector((state: RootState) => {
    return state.categorySpending.category
  })


  const [pieStats, setPieStats] = useState<IpieStats>();

  
  // 통계 데이터로 변경
  async function init(category: string[]) {
    histories.forEach(v => {
      // 0: 수입, 1: 지출
      if(v.type === 0) {

      } else {

      }
    })
  }

  useEffect(() => {
    Promise.all([init(categoryIncome), init(categorySpending)])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [histories])

  return(
    <View style={styles.contianer}>
      {/* <Pie data={} color="#fff"/> */}
    </View>
  )
}
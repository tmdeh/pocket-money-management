import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IMonthDataItem } from "../../../redux/slice/history";
import { LineChart } from "react-native-chart-kit";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const styles = StyleSheet.create({
  constainer: {
    flex: 0.5
  },
  notEnoughDataContainer: {
    flex: 0.5,
    justifyContent: "center"
  },
  notEnoughDataText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold"
  }
})

interface LineProps {
  type: "earning" | "spending"
}

interface ILineData {
  labels: Array<string>;
  datasets: Array<ILineDataItem>;
}

interface ILineDataItem {
  data: Array<number>;
}

export function Line({type} : LineProps) {

  const lineConfig = {
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
  }

  const monthData = useSelector((v: RootState) => v.history.history);
  const [data, setData] = useState<ILineData>({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  async function initLineData() {
    let labels: Array<string> = [];
    let lineData: ILineData = {
      labels,
      datasets: [{
        data: [],
      }],
    };
    // 데이터가 없는 경우 출력하지 않는다.
    if (monthData.length === 0) {
      return;
    }
    const today = monthData[0].day;
    // 0 ~ 현제까지
    for (let i = 1; i <= today; ++i) {
      lineData.datasets[0].data.push(0);
      labels.push(i.toString());
    }
    monthData.forEach((v: IMonthDataItem) => {
      lineData.datasets[0].data[v.day - 1] += v.price;
    });

    setData(lineData);
  }

  useEffect(() => {
    initLineData();
  }, [type, monthData])

  if(monthData.length <= 1) {
    return (
      <View style={styles.notEnoughDataContainer}> 
        <Text style={styles.notEnoughDataText}>데이터가 너무 적습니다.</Text>
      </View>
    )
  }

  return(
    <View style={styles.constainer}>
      <LineChart data={data} height={400} width={400} chartConfig={lineConfig}  />
    </View>
  )
}
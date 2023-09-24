import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { IMonthData, IMonthDataItem } from "../../redux/slice/history";
import { PieChart } from "react-native-chart-kit";


interface IStatsProp {
  monthData: IMonthData
  type: 0 | 1,
  category: {
    earning: string[]
    spending: string[]
  }
}

interface IPieDataItem {
  name: string,
  population: number,
  color: string,
  // legendFontColor: string,
  // legendFontSize: number
}

interface ILineDataItem {
  data: Array<number>,
}


interface IChartData {
  pie: Array<IPieDataItem>
  line: {
    labels: Array<string>,
    datasets: Array<ILineDataItem>,
  }
}


export default function Stats({ monthData, type, category}: IStatsProp) {


  const [chartData] = useState<IChartData>({
    pie: [],
    line: {
      labels: [],
      datasets: []
    }
  })

  async function setPieData() {

    let count: {[key: string]: number} = {};

    monthData.history.forEach((v: IMonthDataItem) => {
      if(type === v.type) {
        // 카테고리
        let name: string;
        if(type === 0) {
          name = category.earning[v.category];
        } else {
          name = category.spending[v.category];
        }

        // 카운트
        if(count[name]) {
          count[name] += 1
        }
        else {
          count[name] = 1
        }
      }
    })

    for(let [category, value] of Object.entries(count)) {
      chartData.pie.push({
        name: category,
        population: value,
        color: "black",
      })
    }
  }


  async function setLineData() {
    let labels: Array<string> = [];
    let lineData: ILineDataItem = {
      data: []
    }

    if(monthData.history.length === 0) {
      return;
    }

    const today = monthData.history[0]?.day;

    // 0 ~ 현제까지
    for(let i = 1; i <= today; ++i) {
      lineData.data.push(0);
      labels.push(i.toString());
    }

    monthData.history.forEach((v: IMonthDataItem) => {
      if(type === v.type) {
        lineData.data[v.day - 1] += v.price
      }
    })

    chartData.line.labels = labels;
    chartData.line.datasets = [lineData];
  }
  

  useEffect(() => {
    setPieData()
    setLineData()
  }, [monthData])

  return(
    <View>
      <Text>{type === 0 ? "수입" : "지출"}</Text>
    </View>
  )
}
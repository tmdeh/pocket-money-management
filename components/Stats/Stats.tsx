import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { IMonthData, IMonthDataItem } from "../../redux/slice/history";
import { LineChart, PieChart } from "react-native-chart-kit";
import tinycolor from "tinycolor2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

interface IStatsProp {
  monthData: IMonthDataItem[];
  type: "earning" | "spending";
}

interface IPieDataItem {
  name: string;
  value: number;
  color: string;
}

interface ILineDataItem {
  data: Array<number>;
}

interface ILineData {
  labels: Array<string>;
  datasets: Array<ILineDataItem>;
}

export default function Stats({ monthData, type }: IStatsProp) {
  const category = useSelector((v: RootState) => v.category);
  const [pieData, setPieData] = useState<IPieDataItem[]>([]);
  const [lineData, setLienData] = useState<ILineData>({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

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
      color += 10;
    }

    for (let [category, count] of Object.entries(nameCount)) {
      pieData.push({
        color: tinycolor("black").brighten(color).toString(),
        name: category,
        value: count,
      });
    }
    setPieData(pieData);
  }

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

    setLienData(lineData);
  }

  useEffect(() => {
    initPieData();
    initLineData();
  }, [monthData, type]);

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  };

  return (
    <View>  
      <PieChart
        data={pieData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor={"value"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
      />
      <ScrollView horizontal={true}>
        <LineChart
          data={lineData}
          height={220}
          width={1000}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </View>
  );
}

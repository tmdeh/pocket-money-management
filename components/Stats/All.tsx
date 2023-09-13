import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HistoryItem } from "../../redux/slice/history";
import Pie from "./PieChart";
import { ScrollView } from "react-native-gesture-handler";



const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  pieContainer: {
    margin: 5,
  }
});

interface AllProps {
  histories: HistoryItem[],
  category: string[][]
}

interface IpieStats {
  income: {},
  spending: {}
}




export default function All({histories, category}: AllProps) {


  const [categoryIncome, categorySpending] = category;
  const [categoryCount, setCategoryCount] = useState<IpieStats>()

  async function initPieData() {
    const initIncome = async() => {
      let income: any = {}
      categoryIncome.forEach(v => {
        income[v] = 0
      })
      return income
    }
    const initSpending = async() => {
      let spending: any = {}
      categorySpending.forEach(v => {
        spending[v] = 0
      })
      return spending
    }

    let count = await Promise.all([initIncome(), initSpending()]).then(r => {
      return {income: r[0], spending: r[1]}
    })
    
    histories.forEach(v => {
      if(v.type === 0) {
        count.income[categoryIncome[v.category]] += 1
      } else {
        count.spending[categorySpending[v.category]] += 1
      }
    })

    setCategoryCount(count)
  }

  useEffect(() => {
    initPieData()
  }, [histories])

  return(
    <ScrollView style={styles.contianer}>
      <View style={styles.pieContainer}>
        <Text style={styles.label}>수입</Text>
        <Pie propData={categoryCount?.income} color="#fff"/>

      </View>
      <View style={styles.pieContainer}>
        <Text style={styles.label}>지출</Text>
        <Pie propData={categoryCount?.spending} color="#fff" />
      </View>
    </ScrollView>
  )
}
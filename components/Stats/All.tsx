import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HistoryItem } from "../../redux/slice/history";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



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
  income: [string: string],
  spending: [string: string]
}


export default function All({histories}: AllProps) {

  const categoryIncome = useSelector((state: RootState) => {
    return state.categoryIncome.category
  })
  
  const categorySpending = useSelector((state: RootState) => {
    return state.categorySpending.category
  })




  const [pieStats, setPieStats] = useState<IpieStats>()

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

    setPieStats(count)
  }
  useEffect(() => {
    initPieData()
  }, [histories])

  return(
    <View style={styles.contianer}>
      {/* <Pie data={} color="#fff"/> */}
    </View>
  )
}
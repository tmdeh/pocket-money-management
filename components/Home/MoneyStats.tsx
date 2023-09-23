import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { android, ios } from "../../module/shadow";


interface MoneyStatsProp {
  left: number,
  income: number,
  spending: number
}

export default function MoneyStats({left, income, spending}: MoneyStatsProp) {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>남은돈: {left.toLocaleString('ko-KR')}원</Text>
      <Text style={styles.text}>지출: {spending.toLocaleString('ko-KR')}원</Text>
      <Text style={styles.text}>수입: {income.toLocaleString('ko-KR')}원</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    width: "90%",
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 0,
    ...Platform.select({
      android,
      ios
    })
  },
  headerText: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "bold"
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10
  }
})
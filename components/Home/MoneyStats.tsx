import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";


interface MoneyStatsProp {
  left: number,
  income: number,
  spending: number
}

export default function MoneyStats({left, income, spending}: MoneyStatsProp) {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>남은돈: {left}원</Text>
      <Text style={styles.text}>지출: {spending}원</Text>
      <Text style={styles.text}>수입: {income}원</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    width: "80%",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 0,
    ...Platform.select({
      ios: {
          shadowColor: 'black',
          shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    })
  },
  headerText: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 30,
    fontWeight: "bold"
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10
  }
})
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MoneyStats() {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>남은돈: 4000원</Text>
      <Text style={styles.text}>지출: 2000원</Text>
      <Text style={styles.text}>수입: 6000원</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 2
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
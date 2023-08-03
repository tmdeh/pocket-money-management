import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars"


const styles = StyleSheet.create({
  container: {
    flex: 0.5
  }
})

interface CalenderProp {
  
}

export default function Calender() {
  return (
    <View style={styles.container}>
      <Calendar></Calendar>
    </View>
  )
}
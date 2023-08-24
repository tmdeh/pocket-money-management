import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  }
});

export default function Month() {
  return(
    <View style={styles.contianer}>
      <Text>Month</Text>
    </View>
  )
}
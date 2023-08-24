import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HistoryItem } from "../../redux/slice/history";

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "white"    
  }
});

interface AllProps {
  histories: HistoryItem[]
}

export default function All({histories}: AllProps) {

  useEffect(() => {
    console.log(histories)
  }, [histories])

  return(
    <View style={styles.contianer}>
      
    </View>
  )
}
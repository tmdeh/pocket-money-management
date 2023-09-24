import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface IStatsTabBarProps {
  isSelected: "earning" | "spending",
  setIsSelected: Dispatch<SetStateAction<"earning" | "spending">>
}


const styles = StyleSheet.create({
  container: { 
    flex: 0.07,
    justifyContent: 'space-around',
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    flex: 1,
    height: "100%"
  },
  selectedButton: {
    justifyContent: "center",
    height: "100%",
    flex: 1
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  selectedText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24
  },
})


export default function StatsTabBar({isSelected, setIsSelected}: IStatsTabBarProps) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsSelected("earning")} style={[isSelected === "earning" ? styles.selectedButton : styles.button]}>
        <Text style={[isSelected === "earning" ? styles.selectedText : styles.text]}>수입</Text>       
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSelected("spending")} style={[isSelected === "spending" ? styles.selectedButton : styles.button]}>
        <Text style={[isSelected === "spending" ? styles.selectedText : styles.text]}>지출</Text>       
      </TouchableOpacity>
    </View>
  )
}
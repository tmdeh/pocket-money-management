import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { ios, android } from "../../module/shadow";

interface IStatsTabBarProps {
  isSelected: "earning" | "spending",
  setIsSelected: Dispatch<SetStateAction<"earning" | "spending">>
}


const styles = StyleSheet.create({
  container: { 
    flex: 0.1,
    justifyContent: 'space-around',
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderRadius: 24,
    marginLeft: 20,
    marginRight: 20,
  },
  selectedButton: {
    backgroundColor: "black",
    ...Platform.select({
      ios,
      android
    })
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  selectedText: {
    color: "white",
  },
})


export default function StatsTabBar({isSelected, setIsSelected}: IStatsTabBarProps) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsSelected("earning")} style={[styles.button, isSelected === "earning" ? styles.selectedButton : null]}>
        <Text style={[styles.text, isSelected === "earning" ? styles.selectedText : null]}>수입</Text>       
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSelected("spending")} style={[styles.button, isSelected === "spending" ? styles.selectedButton : null]}>
        <Text style={[styles.text, isSelected === "spending" ? styles.selectedText : null]}>지출</Text>       
      </TouchableOpacity>
    </View>
  )
}
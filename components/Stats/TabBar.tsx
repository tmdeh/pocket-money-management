import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "space-around",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: "30%",
    borderRadius: 25,
    height: "80%",
    justifyContent: "center",
    backgroundColor: "black",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      }
    })
  },
  selectedButton: {
    backgroundColor: "white"
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  selctedLabel: {
    color: "black"
  }
});


interface TabBarProp {
  setSelecteTab: React.Dispatch<React.SetStateAction<number>>
  selected: number
}


export default function TabBar({setSelecteTab, selected}: TabBarProp) {
  return(
    <View style={styles.container} >
      <TouchableOpacity style={[styles.button, selected === 0 ? styles.selectedButton : null]} onPress={() => setSelecteTab(0)}>
        <Text style={[styles.label, selected === 0 ? styles.selctedLabel : null]}>전체</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, selected === 1 ? styles.selectedButton : null]} onPress={() => setSelecteTab(1)}>
        <Text style={[styles.label, selected === 1 ? styles.selctedLabel : null]}>주간</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, selected === 2 ? styles.selectedButton : null]} onPress={() => setSelecteTab(2)}>
        <Text style={[styles.label, selected === 2 ? styles.selctedLabel: null]}>월간</Text>
      </TouchableOpacity>
    </View>
  )
}
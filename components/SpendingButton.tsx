import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Platform } from "react-native";
import { Link } from "expo-router";
import { android, ios } from "../module/shadow";

const style = StyleSheet.create({
  container: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "black",
    borderRadius: 25,
    ...Platform.select({
      android,
      ios,
    })
  },
  button: {
    overflow: "hidden",
    borderRadius: 25,
  }
});

export default function SpendingButton() {
  return (
    <View style={style.container}>
        <Link
          href={{pathname: "Spending"}}
          style={style.button}
        >
          <AntDesign name="minus" size={50} color="white" />
        </Link>
    </View>
  );
}

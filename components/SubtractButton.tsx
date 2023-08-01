import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

const style = StyleSheet.create({
  container: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "black",
    borderRadius: 25
  },
  button: {
    overflow: "hidden",
    borderRadius: 25,
  }
});

export default function SubtractButton() {
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

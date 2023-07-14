import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const style = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 25,
  },
  container: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
  },
});

interface SubtractProps {}

export default function SubtractButton({}: SubtractProps) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => console.log("pressed")}
      >
        <AntDesign name="minus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

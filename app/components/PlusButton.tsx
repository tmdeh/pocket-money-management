import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Platform, View } from "react-native";

const style = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 25,
  },
  container: {
    position: "absolute",
    right: "5%",
    bottom: "18%",
  },
});

interface PlusButtonProps {}

export default function PlusButton({}: PlusButtonProps) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => console.log("pressed2")}
      >
        <Entypo name="plus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

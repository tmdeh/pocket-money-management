import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createNavigationContainerRef, useNavigation } from "@react-navigation/core";
import { RootStackParamList, SubtractScreenProp } from "../../types";

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

export default function SubtractButton() {

  const navigation = useNavigation<SubtractScreenProp>();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Subtract")}
      >
        <AntDesign name="minus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

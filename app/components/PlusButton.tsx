import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AddIncomeScreenProp, RootStackParamList } from "../../types";

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

export default function PlusButton() {

  const navigation = useNavigation<AddIncomeScreenProp>();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("AddIncome")}
      >
        <Entypo name="plus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
}

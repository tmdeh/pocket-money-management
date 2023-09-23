import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View, Platform } from "react-native";
import { Link } from "expo-router";
import { ios, android } from '../module/shadow';


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: "5%",
    bottom: "18%",
    backgroundColor: "black",
    borderRadius: 25,
    ...Platform.select({
      ios,
      android
    }),
  },
  button: {
    overflow: "hidden",
    borderRadius: 25,
  }
});

export default function PlusButton() {
  return (
    <View style={styles.container}>
        <Link
          href={{pathname: "AddEarning"}}
          style={styles.button}
          >
          <Entypo name="plus" size={50} color="white" />
        </Link>
    </View>
  );
}

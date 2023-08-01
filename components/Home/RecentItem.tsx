import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RecentProps {
  price: number;
  icon: JSX.Element;
  label: string;
}

export default function RecentItem({ price, icon, label }: RecentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextWarpper}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.price}>{price} 원</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  iconTextWarpper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 200,
    margin: 10,
  },
  label: {
    marginLeft: 30,
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    marginRight: 20,
  },
});

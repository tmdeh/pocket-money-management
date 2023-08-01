import React from "react";
import { Platform } from 'react-native';
import { StyleSheet, Text, View } from "react-native";
import { HistoryType } from "../../redux/slice/history";

interface RecentProps {
  price: number;
  icon: JSX.Element;
  label: string;
  type: HistoryType
}

export default function RecentItem({ price, icon, label, type }: RecentProps) {
  return (
    <View style={[styles.container, type ? styles.spending : null]}>
      <View style={styles.iconTextWarpper}>
        {icon}
        <Text style={[styles.label, type ? styles.spending : null]}>{label}</Text>
      </View>
      <Text style={[styles.price, type ? styles.spending : null]}>{price} 원</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderWidth: 0,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 10,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
          shadowColor: 'black',
          shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    })
  },
  income: {

  },
  spending: {
    backgroundColor: "black",
    color: "#fff"
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
    fontWeight: "bold"
  },

  price: {
    fontSize: 20,
    marginRight: 20,
  },
});

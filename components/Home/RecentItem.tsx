import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RecentProps {
  price: number,
  category: number
}

const Icon = [
  
]

export default function RecentItem({price, category}: RecentProps) {
  return(
    <View style={styles.container}>
      <View style={styles.iconTextWarpper}>
        {/* {icon} */}
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={styles.price}>{price}원</Text>
    </View>
  )
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
    backgroundColor: "#fff"
  },
  iconTextWarpper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 200,
    margin: 10
  },
  category: {
    marginLeft: 20,
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    marginRight: 20
  }
})
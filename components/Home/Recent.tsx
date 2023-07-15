import React from "react";
import { StyleSheet, View } from "react-native";
import RecentItem from "./RecentItem";
import MealIcon from "../../assets/icon/meal";
import { ScrollView } from "react-native-gesture-handler";


const mockup = [
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 1000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 2000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 3000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 1000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 2000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 3000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 1000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 2000
  },
  {
    category: {
      value: "식사",
      icon: MealIcon({size: 30})
    },
    price: 3000
  },
]


export default function Recent() {

  return (
    <ScrollView style={styles.container}>
      {mockup.map((v, i) => (
        <RecentItem category={v.category.value} price={v.price} key={i} icon={v.category.icon} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    width: "100%",
  }
})
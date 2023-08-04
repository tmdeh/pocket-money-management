import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoryList from "../History/CategoryLIst";


const styles = StyleSheet.create({
  container: {
    flex: 0.5
  }
});

interface InfoProp {

}


export default function Info() {
  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  )
}
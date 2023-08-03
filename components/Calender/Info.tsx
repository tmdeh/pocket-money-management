import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 0.5
  }
});

interface InfoProp {

}


export default function Info() {
  return (
    <View style={styles.container}>
      <Text>info</Text>
    </View>
  )
}
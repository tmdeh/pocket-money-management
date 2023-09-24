import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StatsTabBar from "../../components/Stats/TabBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


type selected = "earning" | "spending"

export default function StatsScreens(): JSX.Element {

  const [isSelected, setIsSelected] = useState<selected>("earning");

  return (
    <View style={styles.container}>
      <StatsTabBar isSelected={isSelected} setIsSelected={setIsSelected} />
    </View>
  );
}

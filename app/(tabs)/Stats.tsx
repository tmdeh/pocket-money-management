import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StatsTabBar from "../../components/Stats/TabBar";
import Stats from "../../components/Stats/Stats";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


type selected = "earning" | "spending"

export default function StatsScreens(): JSX.Element {

  const [isSelected, setIsSelected] = useState<selected>("earning");
  const data = useSelector((v: RootState) => v.history.history);

  return (  
    <View style={styles.container}>
      <StatsTabBar isSelected={isSelected} setIsSelected={setIsSelected} />
      {
        isSelected === "earning" ? 
        <Stats monthData={data.filter(v => v.type === 0)} type="earning" /> : 
        <Stats monthData={data.filter(v => v.type === 1)} type="spending" /> 
      }
    </View>
  );
}

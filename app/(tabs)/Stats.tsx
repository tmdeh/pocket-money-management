import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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
  const monthData = useSelector((v: RootState) => v.history);
  const category = useSelector((v: RootState) => v.category)


  return (
    <View style={styles.container}>
      <StatsTabBar isSelected={isSelected} setIsSelected={setIsSelected} />
      {isSelected === "earning" ? <Stats category={category} monthData={monthData} type={0}/> : <Stats category={category} monthData={monthData} type={1}/>}
    </View>
  );
}

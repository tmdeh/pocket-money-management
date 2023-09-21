import React, { useEffect, useMemo } from "react";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { change } from "../../redux/slice/header";


interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}


const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    margin: 30
  }
})



export default function TabLayout() {

  const buttonSize = 24;

  const dispatch = useDispatch<AppDispatch>();

  let {year, month} = useSelector((state: RootState) => {
    return state.header
  })

  function onTouchHeaderButton(increment: number) {

    let tempMonth = parseInt(month) + increment;

    // 12월로 넘어가는 경우
    if(tempMonth > 12) {
      dispatch(change({year: parseInt(year) + 1, month: 1}));
      return;
    }

    // 1월 아래로 내려가는 경우
    if(tempMonth < 1) {
      dispatch(change({year: parseInt(year) - 1, month: 12}));
      return;
    }

    dispatch(change({month: tempMonth}));
  }

  function getHeaderButton(direction: "left" | "right", size: number, increment: number) {
    return (
      <TouchableOpacity onPressOut={() => onTouchHeaderButton(increment)} style={styles.button}>
        <AntDesign name={direction} size={size} color="black" />
      </TouchableOpacity>
    )
  }


  function setOption(iconName: any) {
    switch (iconName) {
      case "home":
      case "shoppingcart":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <AntDesign name={iconName} size={size} color={color} />
          ),
          headerTitle: `${year}년 ${month}월`,
          headerRight:  () => getHeaderButton("right", buttonSize, 1),
          headerLeft: () => getHeaderButton("left", buttonSize, -1)
        };
      case "calendar":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <AntDesign name={iconName} size={size} color={color} />
          ),
          headerShown: false
        }
      case "stats-chart-outline":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          headerTitle: `${year}년 ${month}월`
        };
      case "settings":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <Feather name={iconName} size={size} color={color} />
          ),
          headerShown: false,
        };
    }
  }


  return(
    <Tabs screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: "black"}} sceneContainerStyle={{backgroundColor: "white"}}>
      <Tabs.Screen name="index" options={setOption("home")} />
      <Tabs.Screen name="Calendar" options={setOption("calendar")} />
      <Tabs.Screen name="Stats" options={setOption("stats-chart-outline")} />
      <Tabs.Screen name="Shopping" options={setOption("shoppingcart")} />
      <Tabs.Screen name="Settings" options={setOption("settings")} />
    </Tabs>
  )
}
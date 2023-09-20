import React, { useMemo } from "react";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';


interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}




export default function TabLayout() {
  const now = useMemo(getNow, []);

  function getNow(): string {
    const today = new Date();
    let output = "";
    output += today.getFullYear() + "년 ";
    output += today.getMonth() + 1 + "월 ";
    output += today.getDate() + "일 ";
    return output;
  }


  function setOption(iconName: any) {
    switch (iconName) {
      case "home":
      case "shoppingcart":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <AntDesign name={iconName} size={size} color={color} />
          ),
          headerTitle: now
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
          headerTitle: now,
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
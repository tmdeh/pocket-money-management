import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalenderScreen,
  HomeScreen,
  SettingsScreen,
  ShoppingScreen,
  StatsScreens,
} from "../app/screens";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useMemo } from "react";

const Tab = createBottomTabNavigator();

const screenStyle = StyleSheet.create({
  contianer: {
    flex: 1,
  },
});

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

export default function BottomTabNavigation() {
  const now = useMemo(getNow, []);

  function getNow(): string {
    const today = new Date();
    let output = "";
    output += today.getFullYear() + "년 ";
    output += today.getMonth() + "월 ";
    output += today.getDate() + "일 ";
    return output;
  }

  function setOption(iconName: any) {
    switch (iconName) {
      case "home":
      case "calendar":
      case "shoppingcart":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <AntDesign name={iconName} size={size} color={color} />
          ),
          headerTitle: now,
        };
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

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000"
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ style: screenStyle }}
          options={setOption("home")}
        />
        <Tab.Screen
          name="Calender"
          component={CalenderScreen}
          options={setOption("calendar")}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreens}
          initialParams={{ style: screenStyle }}
          options={setOption("stats-chart-outline")}
        />
        <Tab.Screen
          name="Shopping"
          component={ShoppingScreen}
          initialParams={{ style: screenStyle }}
          options={setOption("shoppingcart")}
        />
      </Tab.Group>
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={setOption("settings")}
      />
    </Tab.Navigator>
  );
}

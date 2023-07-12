import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalenderScreen,
  HomeScreen,
  SettingsScreen,
  ShoppingScreen,
  StatsScreens,
} from "../screens";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const screenStyle = StyleSheet.create({
  contianer: {
    flex: 1
  }
})

export default function BottomTabNavigation() {
  interface IconProps {
    focused: boolean;
    color: string;
    size: number;
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
        };
      case "stats-chart-outline":
        return {
          tabBarIcon: ({ color, size }: IconProps) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
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

  // TODO:
  //  1. 수입/지출 화면 추가
  //  2. Home 화면에 수입과 지출 추가
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{style: screenStyle}}
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
          initialParams={{style: screenStyle}}
          options={setOption("stats-chart-outline")}
        />
        <Tab.Screen
          name="Shopping"
          component={ShoppingScreen}
          initialParams={{style: screenStyle}}
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

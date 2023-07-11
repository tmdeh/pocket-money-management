import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalenderScreen, HomeScreen, SettingsScreen, ShoppingScreen, StatsScreens } from "../screens";
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {

  interface IconProps {
    focused: boolean;
    color: string;
    size: number;
  }

  function setOption(iconName: any) {
    switch(iconName) {
      case "home":
      case "calendar":
      case "shoppingcart":
        return {
            tabBarIcon : ({color, size}: IconProps) => (
            <AntDesign name={iconName} size={size} color={color} />
          )
        }
      case "stats-chart-outline":
        return {
          tabBarIcon : ({color, size}: IconProps) => (
          <Ionicons name={iconName} size={size} color={color} />
        )
      }
      case "settings": 
        return {
          tabBarIcon : ({color, size}: IconProps) => (
            <Feather name={iconName} size={size} color={color} />
          )
        }
    }
  }
  
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      tabBarShowLabel: false
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={setOption("home")} />
      <Tab.Screen name="Calender" component={CalenderScreen} options={setOption("calendar")} />
      <Tab.Screen name="Stats" component={StatsScreens} options={setOption("stats-chart-outline")}/>
      <Tab.Screen name="Shopping" component={ShoppingScreen} options={setOption("shoppingcart")}/>
      <Tab.Screen name="Setting" component={SettingsScreen} options={setOption("settings")}/>
    </Tab.Navigator>
  );
}

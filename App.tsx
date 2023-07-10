import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { CalenderScreen, HomeScreen, SettingsScreen, ShoppingScreen, StatsScreens } from "./screens";
import { Home } from 'react-flaticons';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={{
          tabBarShowLabel: false,
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calender" component={CalenderScreen} />
          <Tab.Screen name="Stats" component={StatsScreens} />
          <Tab.Screen name="Shopping" component={ShoppingScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

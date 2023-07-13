import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme, Button } from "react-native-paper";
import RootNavigation from "./navigation/RootNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

import React from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";




export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="Earning" options={{title: "수입 추가"}} />
            <Stack.Screen name="Spending" options={{title: "지출 추가"}} />
          </Stack>
        </ThemeProvider>
    </Provider>

  );
}

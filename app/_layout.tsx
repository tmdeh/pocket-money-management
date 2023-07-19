import React, { createContext, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { DBContext } from "../context/sqlite";

export default function RootLayout() {


  const { createBreakDown, createCategory, insertCategory } = useContext(DBContext);

  useEffect(() => {
    Promise.all([createBreakDown(), createCategory()])
      .then(async () => await insertCategory("Meal"))
      .catch((e) => console.error(e));
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="AddIncome" options={{title: "수입 추가"}} />
          <Stack.Screen name="Subtract" options={{title: "지출 추가"}} />
        </Stack>
      </ThemeProvider>
  );
}

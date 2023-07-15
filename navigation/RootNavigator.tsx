import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomNavigator";
import AddIncomeScreen from "../app/screens/AddIncome";
import { RootStackParamList } from "../types";
import SubtractScreen from "../app/screens/SubtractScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddIncome"
        component={AddIncomeScreen}
        options={{ title: "수입 추가" }}
      />
      <Stack.Screen
        name="Subtract"
        component={SubtractScreen}
        options={{title: "지출 추가"}}
      />
    </Stack.Navigator>
  );
}

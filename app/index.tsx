
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "../navigation/RootNavigator";
import BottomTabNavigation from "../navigation/BottomNavigator";

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <RootNavigation />
    </NavigationContainer>
  );
}

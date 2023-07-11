import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import RootNavigation from "./navigation/RootNavigator";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
// TODO: 탭바에 아이콘 추가하기

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

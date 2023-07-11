import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomNavigator";


const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
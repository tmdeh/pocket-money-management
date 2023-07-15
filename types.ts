import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type AddIncomeScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomNavigationParamList>, 
  NativeStackNavigationProp<RootStackParamList, "AddIncome">
>

export type SubtractScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomNavigationParamList>, 
  NativeStackNavigationProp<RootStackParamList, "Subtract">
>



export type RootStackParamList = {
  Root: undefined,
  AddIncome: undefined
  Subtract: undefined
};

export type BottomNavigationParamList = {
  Home: undefined,
  Calender: undefined,
  Stats: undefined,
  Settings: undefined,
  Shopping: undefined,
}
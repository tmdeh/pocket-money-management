import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusButton, SubtractButton } from "../Components";
import { StyleSheet, View } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default function ShoppingScreen(): JSX.Element {
    return (
        <View style={style.container}>
            <Text>장보기 화면</Text>
            <PlusButton />
            <SubtractButton />
        </View>
    ) 

}
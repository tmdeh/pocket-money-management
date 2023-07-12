import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import PlusButton from "../Components/PlusButton";
import SubtractButton from "../Components/SubtractButton";

const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default function HomeScreen(): JSX.Element {
    return (
        <View style={style.view}>
            <Text>홈 화면</Text>
            <PlusButton />
            <SubtractButton />
        </View>
    ) 

}
import React from "react";
import { PlusButton, SubtractButton } from "../../components";
import { StyleSheet, Text, View } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default function ShoppingScreen() {
    return (
        <View style={style.container}>
            <Text>장보기 화면</Text>
            <PlusButton />
            <SubtractButton />
        </View>
    ) 

}
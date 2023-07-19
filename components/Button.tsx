import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonProp {
  text: string,
  width: number,
  height: number,
  backgroundColor: string,
  fontColor: string
}

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    color: "white"
  },
})

export default function Button({text, width, height, backgroundColor, fontColor}: ButtonProp) {
  return(
    <TouchableOpacity style={[{width, height, backgroundColor, borderRadius: 5, justifyContent: "center"}]}>
      <Text style={[{color: fontColor, textAlign: "center", fontSize: 20}]}>{text}</Text>
    </TouchableOpacity>
  )
}
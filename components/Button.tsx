import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonProp {
  text: string,
  width: number,
  height: number,
  backgroundColor: string,
  fontColor: string,
  onPress: Function
}

export default function Button({text, width, height, backgroundColor, fontColor, onPress}: ButtonProp) {
  return(
    <TouchableOpacity style={[{width, height, backgroundColor, borderRadius: 5, justifyContent: "center"}]} onPress={() => onPress()}>
      <Text style={[{color: fontColor, textAlign: "center", fontSize: 20}]}>{text}</Text>
    </TouchableOpacity>
  )
}
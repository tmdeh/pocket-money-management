import { AntDesign } from "@expo/vector-icons";
import { Platform, StyleSheet, TouchableOpacity, View, Text } from "react-native";


const style = StyleSheet.create({
    button: {
      backgroundColor: "black",
      borderRadius: 25
    },
    container: {
      position: "absolute",
      right: "5%",
      bottom: "5%",
      ...Platform.select({
        ios: {
          shadowColor: "rgb(50, 50, 50)",
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {
            height: -1,
            width: 0
          }
        },
        android: {
          elevation: 3
        }
      })
    }
})


interface SubtractProps {
}

export default function SubtractButton({}: SubtractProps) {
    return(
      <View style={style.container}> 
        <TouchableOpacity style={style.button} onPress={() => console.log('pressed')}>
          <AntDesign name="minus" size={50} color="white" />
        </TouchableOpacity>
      </View>
    )
}
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Platform, View } from "react-native";


const style = StyleSheet.create({
    button: {
      backgroundColor: "black",
      borderRadius: 25
    },
    container: {
      position: "absolute",
      right: "5%",
      bottom: "18%",
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


interface PlusButtonProps {
}

export default function PlusButton({}: PlusButtonProps) {
    return(
        <View style={style.container}> 
        <TouchableOpacity style={style.button} onPress={() => console.log('pressed2')}>
            <Entypo name="plus" size={50} color="white" />
        </TouchableOpacity>
      </View>
    )
}
import React from "react";
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    margin: 25
  },
  selectedContainer: {
    
  },
  icon: { 
    margin: 10
  },
  label: {
    fontSize: 20,
    textAlign: "center"
  }
})


interface AddIncomeListProp {
  iconSize: number
}

interface ItemProp {
  icon: JSX.Element,
  label: string
}

function Item({icon, label}: ItemProp) {
  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )

}

export default function AddIncomeList({iconSize}: AddIncomeListProp) {
  
  const icons = [
    {
      id: 1,
      icon: <FontAwesome5 name="coins" size={iconSize} color="black" />,
      label: "월급"
    },
    {
      id: 2,
      icon: <FontAwesome5 name="money-bill-wave" size={iconSize} color="black" />,
      label: "용돈"
    },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="hand-coin" size={iconSize} color="black" />,
      label: "보너스"
    },
    {
      id: 4,
      icon: <AntDesign name="question" size={iconSize} color="black" />,
      label: "기타"
    }
  ]
  
  return(
    <>
      {icons.map(v => <Item icon={v.icon} label={v.label} key={v.label}/>)}
    </>
  )
}
import React, { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome5, MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    width: 100,
    alignItems: "center",
    margin: 15,
    borderRadius: 20,
    padding: 10
  },
  selectedContainer: {
    backgroundColor: "black",
  },
  icon: { 
    margin: 10
  },
  label: {
    fontSize: 20,
    textAlign: "center"
  },
  selectedLabel: {
    color: "white"
  }
})


interface AddIncomeListProp {
  iconSize: number,
}

interface ItemProp {
  icon: JSX.Element,
  label: string,
  selected: boolean
  id: number
}

function Item({icon, label, selected}: ItemProp) {

  const userInput = useSelector((state: RootState) => {
    return state.userInput
  });

  return(
    <TouchableOpacity style={[styles.container, selected ? styles.selectedContainer : null]}>
      <View style={styles.icon}>
        {icon}
      </View>
      <Text style={[styles.label, selected ? styles.selectedLabel : null]}>{label}</Text>
    </TouchableOpacity>
  )

}

export default function SubtractList({ iconSize }: AddIncomeListProp) {
  const userInput = useSelector((state: RootState) => {
    return state.userInput
  });

  const icons = [ 
    {
      id: 1,
      icon: <MaterialCommunityIcons name="silverware-fork-knife" size={iconSize} color={userInput.category == 1 ? "white" : "black"} />,
      label: "식비"
    },
    {
      id: 2,
      icon: <FontAwesome5 name="briefcase-medical" size={iconSize} color={userInput.category == 2 ? "white" : "black"} />,
      label: "의료"
    },
    {
      id: 3,
      icon: <FontAwesome5 name="bus" size={iconSize} color={userInput.category == 3 ? "white" : "black"} />,
      label: "교통"
    },
    {
      id: 4,
      icon: <FontAwesome5 name="pen" size={iconSize} color={userInput.category == 4 ? "white" : "black"} />,
      label: "자기계발"
    },
    {
      id: 5,
      icon: <FontAwesome name="shopping-bag" size={iconSize} color={userInput.category == 5 ? "white" : "black"} />,
      label: "생필품"
    },
    {
      id: 6,
      icon: <MaterialIcons name="attach-money" size={iconSize} color={userInput.category == 6 ? "white" : "black"} />,
      label: "저축"
    },
    {
      id: 7,
      icon: <AntDesign name="question" size={iconSize} color={userInput.category == 7 ? "white" : "black"} />,
      label: "기타"
    }, 
  ]
  
  
  
  return(
    <>
      {icons.map(v => <Item icon={v.icon} label={v.label} selected={v.id === userInput.category} key={v.id} id={v.id} />)}
    </>
  )
}
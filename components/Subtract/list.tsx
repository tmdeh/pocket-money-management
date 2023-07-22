import React, { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserInput } from "../../app/AddIncome";



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
    backgroundColor: "gray",
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
  iconSize: number,
  selected: number,
  setUserInput: Dispatch<SetStateAction<UserInput>>
}

interface ItemProp {
  icon: JSX.Element,
  label: string,
  selected: boolean
}

function Item({icon, label, selected}: ItemProp) {

  return(
    <TouchableOpacity style={[styles.container, selected ? styles.selectedContainer : null]}>
      <View style={styles.icon}>
        {icon}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )

}

export default function AddIncomeList({iconSize, selected, setUserInput}: AddIncomeListProp) {
  
  const [selectId, setSelectId] = useState(selected)

  const icons = [
    {
      id: 1,
      icon: <MaterialCommunityIcons name="silverware-fork-knife" size={iconSize} color="black" />,
      label: "식비"
    },
    {
      id: 2,
      icon: <FontAwesome5 name="briefcase-medical" size={iconSize} color="black" />,
      label: "의료"
    },
    {
      id: 3,
      icon: <FontAwesome5 name="bus" size={iconSize} color="black" />,
      label: "교통"
    },
    {
      id: 4,
      icon: <FontAwesome5 name="pen" size={iconSize} color="black" />,
      label: "자기계발"
    },
    {
      id: 5,
      icon: <FontAwesome name="shopping-bag" size={iconSize} color="black" />,
      label: "생필품"
    },
    {
      id: 6,
      icon: <FontAwesome name="shopping-bag" size={iconSize} color="black" />,
      label: "저축"
    },
    {
      id: 7,
      icon: <FontAwesome name="shopping-bag" size={iconSize} color="black" />,
      label: "기타"
    }, 
  ]
  
  
  
  return(
    <>
      {icons.map(v => <Item icon={v.icon} label={v.label} key={v.id} selected={v.id == selectId} />)}
    </>
  )
}
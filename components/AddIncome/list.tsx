import React, { useEffect } from "react";
import { FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { update, userInputSlice } from "../../redux/slice/userInput";



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
  selected: boolean,
  id: number
}

function Item({icon, label, selected, id}: ItemProp) {

  const dispatch = useDispatch<AppDispatch>()

  function onPress() {
    dispatch(userInputSlice.actions.update({category: id}))
  }


  return(
    <TouchableOpacity style={[styles.container, selected ? styles.selectedContainer : null]} onPress={onPress}>
      <View style={[styles.icon]}>
        {icon}
      </View>
      <Text style={[styles.label, selected ? styles.selectedLabel : null]}>{label}</Text>
    </TouchableOpacity>
  )

}

export default function AddIncomeList({iconSize}: AddIncomeListProp) {

  const userInput = useSelector((state: RootState) => {
    return state.userInput
  });

  const icons = [
    {
      id: 1,
      icon: <FontAwesome5 name="coins" size={iconSize} color={userInput.category == 1 ? "white" : "black"} />,
      label: "월급"
    },
    {
      id: 2,
      icon: <FontAwesome5 name="money-bill-wave" size={iconSize} color={userInput.category == 2 ? "white" : "black"} />,
      label: "용돈"
    },
    {
      id: 3,
      icon: <MaterialIcons name="attach-money" size={iconSize} color={userInput.category == 3 ? "white" : "black"} />,
      label: "보너스"
    },
    {
      id: 4,
      icon: <AntDesign name="question" size={iconSize} color={userInput.category == 4 ? "white" : "black"} />,
      label: "기타"
    }
  ]


  return(
    <>
      {icons.map(v => <Item icon={v.icon} label={v.label} key={v.id} selected={v.id == userInput.category} id={v.id}/>)}
    </>
  )
}
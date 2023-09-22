import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { userInputSlice } from "../../redux/slice/userInput";
import { useDispatch } from "react-redux";



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


interface CategoryListProp {
  icons: {
    id: number,
    icon: JSX.Element,
    label: string
  }[],
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

export default function CategoryList({ icons }: CategoryListProp) {
  const userInput = useSelector((state: RootState) => {
    return state.userInput
  });

  return(
    <>
      {icons.map(v => <Item icon={v.icon} label={v.label} key={v.id} selected={v.id == userInput.category} id={v.id}/>)}
    </>
  );
}
import React from "react";
import AddHistory from "../components/History/AddHistory";
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { HistoryType } from "../redux/slice/history";



export default function AddIncome() {
  
  const userInput = useSelector((state: RootState ) => state.userInput);
  const iconSize = 50;
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
    <AddHistory icons={icons} type={HistoryType.INCOME} />
  )
}
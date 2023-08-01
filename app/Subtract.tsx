import React from "react";
import AddHistory from "../components/History/AddHistory";
import { FontAwesome5, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { HistoryType } from "../redux/slice/history";



export default function AddIncome() {
  
  const userInput = useSelector((state: RootState ) => state.userInput);
  const iconSize = 50;
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
      icon: <FontAwesome5 name="shopping-bag" size={iconSize} color={userInput.category == 5 ? "white" : "black"} />,
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
    <AddHistory icons={icons} type={HistoryType.SPENDING} />
  )
}
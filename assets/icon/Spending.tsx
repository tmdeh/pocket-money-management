
import React from 'react';
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';


interface SpendingIconProp {
  iconSize: number,
  userInput: {
    category: number
  }
}

export default function SependingIcon({iconSize, userInput}: SpendingIconProp) {
  return [ 
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
}


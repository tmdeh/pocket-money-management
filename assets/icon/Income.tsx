import React from 'react';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';

interface SpendingIconProp {
  iconSize: number,
  userInput?: {
    category: number
  }
}

export default function AddIncomeIcon({iconSize, userInput}: SpendingIconProp) {
  return  [
    {
      id: 0,
      icon: <FontAwesome5 name="coins" size={iconSize} color={userInput?.category == 0 ? "white" : "black"} />,
      label: "월급"
    },
    {
      id: 1,
      icon: <FontAwesome5 name="money-bill-wave" size={iconSize} color={userInput?.category == 1 ? "white" : "black"} />,
      label: "용돈"
    },
    {
      id: 2,
      icon: <MaterialIcons name="attach-money" size={iconSize} color={userInput?.category == 2 ? "white" : "black"} />,
      label: "보너스"
    },
    {
      id: 3,
      icon: <AntDesign name="question" size={iconSize} color={userInput?.category == 3 ? "white" : "black"} />,
      label: "기타"
    }
  ]
}


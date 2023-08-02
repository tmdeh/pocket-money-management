
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';


interface SpendingIconProp {
  iconSize: number,
  category?: number,
  isList?: boolean
}

export default function SependingIcon({iconSize, category, isList }: SpendingIconProp) {

  return [ 
    {
      id: 0,
      icon: <MaterialCommunityIcons name="silverware-fork-knife" size={iconSize} color={category == 0 || isList ? "white" : "black"} />,
      label: "식비"
    },
    {
      id: 1,
      icon: <FontAwesome5 name="briefcase-medical" size={iconSize} color={category == 1 || isList ? "white" : "black"} />,
      label: "의료"
    },
    {
      id: 2,
      icon: <FontAwesome5 name="bus" size={iconSize} color={category == 2 || isList ? "white" : "black"} />,
      label: "교통"
    },
    {
      id: 3,
      icon: <FontAwesome5 name="pen" size={iconSize} color={category == 3 || isList ? "white" : "black"} />,
      label: "자기계발"
    },
    {
      id: 4,
      icon: <FontAwesome5 name="shopping-bag" size={iconSize} color={category == 4 || isList ? "white" : "black"} />,
      label: "생필품"
    },
    {
      id: 5,
      icon: <MaterialIcons name="attach-money" size={iconSize} color={category == 5 || isList ? "white" : "black"} />,
      label: "저축"
    },
    {
      id: 6,
      icon: <AntDesign name="question" size={iconSize} color={category == 6 || isList ? "white" : "black"} />,
      label: "기타"
    },
  ]
}


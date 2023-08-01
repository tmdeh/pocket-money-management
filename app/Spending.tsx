import React from "react";
import AddHistory from "../components/History/AddHistory";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { HistoryType } from "../redux/slice/history";
import SependingIcon from "../assets/icon/Spending";



export default function Spending() {
  
  const userInput = useSelector((state: RootState ) => state.userInput);
  const iconSize = 50;
  const icons = SependingIcon({iconSize, userInput});

  return(
    <AddHistory icons={icons} type={HistoryType.SPENDING} />
  )
}
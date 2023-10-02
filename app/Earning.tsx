import React from "react";
import AddHistory from "../components/History/AddHistory";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { HistoryType } from "../redux/slice/history";
import AddEarningIcon from "../assets/icon/Earning";



export default function AddEarning() {
  
  const userInput = useSelector((state: RootState ) => state.userInput);
  const iconSize = 50;
  const icons = AddEarningIcon({iconSize, category: userInput.category});

  return(
    <AddHistory icons={icons} type={HistoryType.EARNING} />
  )
}
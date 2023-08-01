import React from "react";
import AddHistory from "../components/History/AddHistory";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { HistoryType } from "../redux/slice/history";
import AddIncomeIcon from "../assets/icon/Income";



export default function AddIncome() {
  
  const userInput = useSelector((state: RootState ) => state.userInput);
  const iconSize = 50;
  const icons = AddIncomeIcon({iconSize, category: userInput.category});

  return(
    <AddHistory icons={icons} type={HistoryType.INCOME} />
  )
}
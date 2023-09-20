import { configureStore } from "@reduxjs/toolkit";
import { userInputSlice } from "./slice/userInput";
import { historySlice } from "./slice/history";
import { category } from './slice/category';



export const store = configureStore({
  reducer: {
    userInput: userInputSlice.reducer,
    history: historySlice.reducer,
    category: category.reducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store
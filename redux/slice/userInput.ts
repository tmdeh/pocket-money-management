import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface UserInput {
  category?: number,
  memo?: string,
  price?: number,
}


export const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    category: 1,
    price: 0,
    memo: "",
  },
  reducers: {
    update: (state, action: PayloadAction<UserInput>) => {

      const { category, memo, price }= action.payload;

      if(category) {
        state.category = category;
      }
      else if(memo) {
        state.memo = memo;
      }
      else if(price) {
        state.price = price;
      }
      return state
    },
    clear: () => {
      return {
        category: 1,
        price: 0,
        memo: "",
      }
    },
  }
})


export const { update } = userInputSlice.actions;
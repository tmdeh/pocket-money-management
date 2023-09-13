
import { createSlice } from "@reduxjs/toolkit";



export const categoryIncome = createSlice({
  name: "category_income",
  initialState: {
    category: ["월급", "용돈", "보너스", "기타"]
  },
  reducers: {},
})

export const categorySpending = createSlice({
  name: "category_spending",
  initialState: {
    category: ["식비", "의료", "교통", "자기계발", "생필품", "저축", "기타"],
  },
  reducers: {}
})
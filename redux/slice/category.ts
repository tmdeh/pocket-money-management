
import { createSlice } from "@reduxjs/toolkit";



export const category = createSlice({
  name: "category",
  initialState: {
    earning: ["월급", "용돈", "보너스", "기타"],
    spending: ["식비", "의료", "교통", "자기계발", "생필품", "저축", "기타"]
  },
  reducers: {},
})
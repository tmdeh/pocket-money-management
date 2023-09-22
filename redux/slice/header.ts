
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNow } from '../../module/date';


const [year, month] = getNow().split("-");


interface IChange {
  month?: number
  year?: number
}

export const headerSlice = createSlice({
  name: "header_date",
  initialState: {
    year: parseInt(year),
    month: parseInt(month)
  },
  reducers: {
    modifyHeader: (state, action: PayloadAction<IChange>) => {
      const {month, year} =  action.payload;

      if(month !== undefined) {
        state.month = month;
      }

      if(year !== undefined) {
        state.year = year
      }
    },
  },
})

export const { modifyHeader } = headerSlice.actions;
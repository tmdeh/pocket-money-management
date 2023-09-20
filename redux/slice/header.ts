
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNow } from '../../module/date';


const [year, month] = getNow().split("-");


interface IChange {
  month?: number | string | undefined,
  year?: number | string | undefined
}

export const headerDate = createSlice({
  name: "header_date",
  initialState: {
    year,
    month
  },
  reducers: {
    change: (state, action: PayloadAction<IChange>) => {
      const {month, year} =  action.payload;

      if(month !== undefined) {
        state.month = month.toString();
      }

      if(year !== undefined) {
        state.year = year.toString();
      }
    },
  },
})
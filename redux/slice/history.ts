import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export enum HistoryType {
  INCOME,
  SPENDING
}

export enum HitoryStatus {
  LOADING = "loading",
  COMPLETE = "complete",
}

interface IAddHistory {
  category: number,
  price: number,
  memo: string,
  type: HistoryType,
}

export interface History {
  left: number,
  spending: number,
  income: number,
  history: HistoryItem[]
}
 
export interface HistoryItem {
  category: number,
  type: HistoryType,
  price: number,
  memo: string,
  date: number
}

export const historyAsyncAdd = createAsyncThunk(
  'history/add',
  async ({category, price, memo, type}: IAddHistory) => {
    try {
      const historyString = await AsyncStorage.getItem("history");
      if(historyString === null) {
        throw new Error("local stroage에 history 없습니다.");
      }
      let store: History = JSON.parse(historyString);

      const item: HistoryItem = {
        category,
        price,
        memo,
        type,
        date: Date.now()
      }

      // 저장소에 추가
      store.history.push(item);
      if(type === 1) {
        store.left -= price;
      }
      else {
        store.left += price;
      }

  
      switch(type) {
        case HistoryType.INCOME:
          store.income += price;
          break;
        case HistoryType.SPENDING:
          store.spending += price;
          break;
      }
      
      // 로컬 저장소에 저장
      await AsyncStorage.setItem("history", JSON.stringify(store));
      return store
    } catch (error) {
      console.error(error)
    }
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    state: HitoryStatus.LOADING,
    left: 0,
    spending: 0,
    income: 0,
    history: new Array<HistoryItem>
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(historyAsyncAdd.pending, (state, action) => {
      state.state = HitoryStatus.LOADING;
    })
    
    builder.addCase(historyAsyncAdd.fulfilled, (state, action) => {
      if(action.payload) {
        const { history, income, left, spending } = action.payload;
        state.history = history,
        state.income = income,
        state.left = left,
        state.spending = spending
      }
      state.state = HitoryStatus.COMPLETE;
    })
  }
})
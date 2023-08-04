import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export enum HistoryType {
  INCOME,
  SPENDING
}

export enum HistoryStatus {
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
  date: string
}


      
function leftPad(value: number) {
  if (value >= 10) {
      return value;
  }

  return `0${value}`;
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

  

      const curr = new Date()
      const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
      const kr_curr = new Date(utc + KR_TIME_DIFF);
      

      const dateString = `${kr_curr.getFullYear()}-${leftPad(kr_curr.getMonth() + 1)}-${leftPad(kr_curr.getDay() - 1)}`


      const item: HistoryItem = {
        category,
        price,
        memo,
        type,
        date: dateString
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


export const historyAsyncLoad = createAsyncThunk(
  'history/load',
  async () => {
    try {
      const historyString = await AsyncStorage.getItem('history');
      if(historyString === null) {
        throw new Error('local stroage에 history가 없습니다.');
      }

      const data = JSON.parse(historyString)
      return data;
    } catch (error) {
      console.error(error)
    }
  }
)

export const historySlice = createSlice({
  name: "history",
  initialState: {
    state: HistoryStatus.LOADING,
    left: 0,
    spending: 0,
    income: 0,
    history: new Array<HistoryItem>
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(historyAsyncAdd.pending, (state, action) => {
      state.state = HistoryStatus.LOADING;
    })
    
    builder.addCase(historyAsyncAdd.fulfilled, (state, action) => {
      if(action.payload) {
        const { history, income, left, spending } = action.payload;
        state.history = history,
        state.income = income,
        state.left = left,
        state.spending = spending
      }
      state.state = HistoryStatus.COMPLETE;
    })


    builder.addCase(historyAsyncLoad.pending, (state, action) => {
      state.state = HistoryStatus.LOADING;
    })

    builder.addCase(historyAsyncLoad.fulfilled, (state, action) => {
      if(action.payload) {
        const { history, income, left, spending } = action.payload;
        state.history = history,
        state.income = income,
        state.left = left,
        state.spending = spending
      }
      state.state = HistoryStatus.COMPLETE;
    })
  }
})
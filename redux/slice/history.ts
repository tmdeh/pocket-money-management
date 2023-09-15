import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNow } from "../../module/date";
import AsyncStorage from "@react-native-async-storage/async-storage";



export enum HistoryType {
  INCOME,
  SPENDING
}

export enum HistoryStatus {
  LOADING = "loading",
  COMPLETE = "complete",
}


interface Input {
  category: number,
  price: number,
  memo: string,
  type: number,
}

interface ILoad {
  year: number,
  month: number
}

export interface IMonthData {
  state: HistoryStatus,
  income: number,
  spending: number,
  left: number,
  month: string,
  history: Array<Item>
}

export interface Item {
  category: number,
  price: number,
  memo: string,
  type: number,
  day: string
}

// 기록 추가
export const historyAsyncAdd = createAsyncThunk(
  'history/add',
  async ({category, memo, price, type}: Input) => { 

    const [year, month, day] = getNow().split('-');
    const yearKey = `history_${year}`;

    try {
      const keys = await AsyncStorage.getAllKeys();
  
      // 새로운 해 일 경우
      if(!(keys.includes(yearKey))) {
        await AsyncStorage.setItem(`history_${year}`, '[]');
      }
  
      // 해당 년을 이용하여 로컬 저장소에서 데이터 찾기
      let monthDataString = await AsyncStorage.getItem(yearKey);
      
      // 해당 년에 없을 경우
      if(monthDataString === null) {
        throw new Error(`${year}이 없습니다.`);
      }
      // json 형태로 변환
      let monthDataArray: IMonthData[] = JSON.parse(monthDataString);

      let m = parseInt(month)

      // 해당월 찾기
      let monthData: IMonthData = monthDataArray[m];

      
      // 해당하는 월이 없을 경우 월 데이터 생성
      if(monthData === undefined) {
        monthData = {
          state: HistoryStatus.LOADING,
          month,
          income: 0,
          spending: 0,
          left: 0,
          history: []
        };
        monthDataArray[m] = monthData;
      }
      
      // 소비, 지출 결과 처리
      if(type === 0) {
        monthData.left += price;
        monthData.income += price;
      } else {
        monthData.left -= price;
        monthData.spending += price;
      }

      // 해당 달에 데이터 추가
      monthData.history.push({
        category,
        price,
        memo,
        type,
        day
      })
      // 로컬 스토리지에 데이터 변경
      await AsyncStorage.setItem(yearKey, JSON.stringify(monthDataArray));
    } catch (error) {
      console.log(error)
    }
  }
);


// 기록 불러오기
export const historyAsyncLoad = createAsyncThunk(
  'history/load',
  async ({year, month}: ILoad) => {
    // 해당 년의 데이터 불러오기
    let yearDataString = await AsyncStorage.getItem(`history_${year}`);

    if(yearDataString === null) {
      throw new Error(`${year}년의 데이터가 없습니다.`);
    }

    // json으로 파싱
    let yearData = JSON.parse(yearDataString);
    // 해당 달 찾기
    return yearData[month];
  }
)

export const historySlice = createSlice({
  name: "history",
  initialState: {
    state: HistoryStatus.LOADING,
    income: 0,
    spending: 0,
    left: 0,
    month: "",
    history: []
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(historyAsyncAdd.pending, (state, action) => {
      state.state = HistoryStatus.LOADING;
    })
    
    builder.addCase(historyAsyncAdd.fulfilled, (state, action) => {
      state.state = HistoryStatus.COMPLETE;
    })


    builder.addCase(historyAsyncLoad.pending, (state, action) => {
      state.state = HistoryStatus.LOADING;
    })

    builder.addCase(historyAsyncLoad.fulfilled, (state, action) => {
      try {
        state = action.payload    
        return state;
      } catch (error) {
        console.error(error)
      }
      state.state = HistoryStatus.COMPLETE;
    })
  }
})
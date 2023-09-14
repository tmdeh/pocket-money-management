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




// 인덱스로 월 표시
interface IMonthRecord {
  month: number,
  income: number,
  spending: number,
  day: Array<IDayRecord>
}

// 인덱스로 날짜 표기
interface IDayRecord {
  category: number,
  price: number,
  type: number,
}

interface Input {
  category: number,
  price: number,
  memo: string,
  type: number
}


// 기록 추가
export const historyAsyncAdd = createAsyncThunk(
  'history/add',
  async ({category, memo, price, type}: Input) => { 

    const [year, month ] = getNow().split('-');
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
      let monthDataArray = JSON.parse(monthDataString);

      let m = parseInt(month)

      // 해당월 찾기
      let monthData = monthDataArray[m];

      
      // 해당하는 월이 없을 경우 월 데이터 생성
      if(monthData === undefined) {
        monthData = {
          month,
          income: 0,
          spending: 0,
          history: []
        };

        monthDataArray[m] = monthData;
      }

      console.log(monthDataArray)


      monthData.history.push({
        category,
        price,
        memo,
        type,
      })


      await AsyncStorage.setItem(yearKey, JSON.stringify(monthDataArray));
      console.log(await AsyncStorage.getItem(yearKey));
    } catch (error) {
      console.log(error)
    }
  }
);


// 기록 불러오기
export const historyAsyncLoad = createAsyncThunk(
  'history/load',
  async () => {
  }
)

export const historySlice = createSlice({
  name: "history",
  initialState: {
    state: HistoryStatus.LOADING,
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
      state.state = HistoryStatus.COMPLETE;
    })
  }
})
import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars"


const styles = StyleSheet.create({
  container: {
    flex: 0.5
  }
})

interface CalenderProp {
  selectDate: string,
  setSelectDate: React.Dispatch<React.SetStateAction<string>>;
}

export default function Calender({selectDate, setSelectDate}: CalenderProp) {

  function onDayPress(date: DateData) {
    setSelectDate(date.dateString);
  }

  return (
    <View style={styles.container}>
      <Calendar 
        onDayPress={onDayPress}
        markedDates={{
          [selectDate]: {selected: true, disableTouchEvent: true}
        }}
      />
    </View>
  )
}
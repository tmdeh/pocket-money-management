import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from "../Button";
import MemoModal from "./memoModal";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { userInputSlice } from "../../redux/slice/userInput";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryLIst";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  priceInputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    flex: 0.15,
    alignItems: "center",
  },
  priceInput: {
    width: 300,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  categoryScrollView: {
    flex: 0.2,
  },
  memoInput: {
    fontSize: 20,
    flex: 0.4,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  won: {
    fontSize: 24,
    margin: 10,
    fontWeight: "bold"
  }
})


interface AddIncomeProps {
  icons: {
    id: number,
    icon: JSX.Element,
    label: string
  }[],
  type: string,
}


export default function AddHistory({icons, type}: AddIncomeProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const userInput = useSelector((state: RootState) => {
    return state.userInput;
  })

  function changePrice(v: string) {
    try {
      dispatch(userInputSlice.actions.update({price: parseInt(v)}))
    } catch (error) {
      console.log(error)
    }
  } 
  function onClickConfirm() {
    try {
      const { price, category, memo } = userInput;
      const now = Date.now()

      if(price <= 0) {
        return;
      }
      const dataString = JSON.stringify({
        type: type,
        price,
        category,
        memo,
        date: now
      });
      AsyncStorage.setItem("transaction-history", dataString);
      dispatch(userInputSlice.actions.clear());
    } catch (error) {
      console.log(error)
    } finally {
      router.back();
    }
  }

  return(
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.priceInputContainer}>
        <TextInput placeholder="1000" style={styles.priceInput} keyboardType="number-pad" onChangeText={changePrice}/>
        <Text style={styles.won}>원</Text>
      </View>
      <View style={styles.categoryScrollView}>
        <ScrollView horizontal={true}>
          <CategoryList icons={icons} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button width={300} height={40} backgroundColor="black" text="메모 입력하기" fontColor="white" onPress={() => setModalVisible(!modalVisible)}/>
        <MemoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      <View style={styles.buttonContainer}>
        <Button width={150} height={40} backgroundColor="black" text="확인" fontColor="white" onPress={onClickConfirm}/>
      </View>
    </KeyboardAvoidingView>
  )
}
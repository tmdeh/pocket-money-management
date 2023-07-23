import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AddIncomeList from "../components/AddIncome/list";
import Button from "../components/Button";
import MemoModal from "../components/memoModal";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  priceInputContainer: {
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
  }
})

export interface UserInput {
  price: number,
  category: 1 | 2 | 3 | 4,
  memo: string
}


export default function AddIncome() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return(
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.priceInputContainer}>
        <TextInput placeholder="1000원" style={styles.priceInput} keyboardType="number-pad" />
      </View>
      <View style={styles.categoryScrollView}>
        <ScrollView horizontal={true}>
          <AddIncomeList iconSize={50} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button width={300} height={40} backgroundColor="black" text="메모 입력하기" fontColor="white" onPress={() => setModalVisible(!modalVisible)}/>
        <MemoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      <View style={styles.buttonContainer}>
        <Button width={150} height={40} backgroundColor="black" text="확인" fontColor="white" onPress={() => console.log('confirm')}/>
      </View>
    </KeyboardAvoidingView>
  )
}
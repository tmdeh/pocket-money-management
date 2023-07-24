import React, { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { userInputSlice } from "../../redux/slice/userInput";
import { useSelector } from "react-redux";


interface MemoModalProp {
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    margin: 20,
    backgroundColor: 'black',
    width: "50%"
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
  },
  inputMemo: {
    height: "70%",
    width: "90%",
    borderWidth: 1,
    padding: 10
  },
});

export default function MemoModal({modalVisible, setModalVisible}: MemoModalProp) {

  const userInput = useSelector((state: RootState) => {
    return state.userInput
  });
  const [memo, setMemo] = useState<string>(userInput.memo);
  
  const dispatch = useDispatch<AppDispatch>();


  function onPressConfirm() {
    //TODO: 메모 입력 업데이트
    dispatch(userInputSlice.actions.update({memo}))
    setModalVisible(!modalVisible);
  }

  return(
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
    <KeyboardAvoidingView style={styles.centeredView} behavior="padding">
      <View style={styles.modalView}>
        <Text style={styles.modalText}>메모</Text>
        <TextInput multiline={true} style={styles.inputMemo} onChangeText={setMemo} value={memo}/>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onPressConfirm}>
          <Text style={styles.textStyle}>확인</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  </Modal>
  )
}
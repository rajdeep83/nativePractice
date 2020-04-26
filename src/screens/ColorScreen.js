import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

reducer = (state, action)=> {
    return [...state, action.value]
}


const HomeScreen = () => {
  let [state , dispatch] = useReducer(reducer, [])
  let handleAddColor = ()=> {
    let colorString = `rgb(${Math.ceil(Math.random()*500)}, ${Math.ceil(Math.random()*500)}, ${Math.ceil(Math.random()*500)})`
    dispatch({value: colorString})
  }
  return (
    <View>
      <Button onPress={handleAddColor} title="Add color"/>
      <FlatList
        data = {state}
        keyExtractor={(color) => color}
        renderItem = {({item})=> <View style={{height: 100, width: 100, backgroundColor: item}}></View>}
      ></FlatList>
      
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    height: 80
  }
});

export default HomeScreen;

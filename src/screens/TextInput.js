import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

reducer = (state, action)=> {
    console.log('state: ', state);
    return {value : action.value}
}


const HomeScreen = () => {
    let [state , dispatch] = useReducer(reducer, {value : "hello"})
    let inputChangeHandler = (value)=> {
        console.log('value: ', value);
        dispatch({value})
    }
    return (
        <View>
            <Text> Enter your Name :</Text>
            <TextInput autoCapitalize="none" style ={styles.input} 
            autoCorrect={false} 
            onChangeText={inputChangeHandler}
            value={state.value}
            />
            <Text>My name is {state.value}</Text>
        </View>)
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        // borderColor: "Black"
    }
});

export default HomeScreen;

import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";



const FlexBoxes = () => {
    return (
        <View style={{ alignItems: "flex-start" }}>
            <View style={{ backgroundColor: "red", height: 20, width: 20, margin: 10 }}></View>
            <View style={{ backgroundColor: "yellow", height: 20, width: 20, margin: 10 }}></View>
            <View style={{ backgroundColor: "green", height: 20, width: 20, margin: 10 }}></View>
        </View>)
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 2,
        // borderColor: "Black"
    }
});

export default FlexBoxes;

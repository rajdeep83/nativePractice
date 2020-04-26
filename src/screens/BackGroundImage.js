import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View, ImageBackground, Image, TouchableOpacity } from "react-native";



const BackGroundImage = (props) => {
    let goTo = (to)=> {
        props.navigation.navigate(to)
    }

    return (
        <ImageBackground style={styles.background} source={require("../../assets/himalayasbackground.jpg")}>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={()=>goTo("Album")}>
                        <Text style={{fontSize : 25, color:"white", alignSelf : "center"}}>View Album</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>goTo("Map")}>
                        <Text style={{fontSize : 25, color:"white", alignSelf : "center", }}>See on Map</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background : {width : "100%", height: "100%"},
    buttons : {top: "80%", justifyContent: "space-evenly"},
    button: {
        alignSelf : "center", 
        backgroundColor: 'rgba(38, 138, 138, 0.8);',
        fontSize : 56,
        borderRadius : 6,
        width : "45%",
        padding: 2,
        marginBottom: 5
        }
});

export default BackGroundImage;

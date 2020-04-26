import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View, Image } from "react-native";
import Swiper from 'react-native-swiper'



const Album = () => {
    return (
        <Swiper autoplay loop style={styles.wrapper} showsButtons loop={false}>
            <View testID="Hello" style={styles.slide1}>
                <Image source={require("../../assets/him1.jpg")}/>
            </View>
            <View testID="Beautiful" style={styles.slide2}>
                <Image style={styles.image}  source={require("../../assets/him2.jpg")}/>
            </View>
            <View testID="Simple" style={styles.slide3}>
            <Image style={styles.image} source={require("../../assets/him3.jpg")}/>
            </View>
        </Swiper>)
};

const styles = {
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  }


export default Album;

import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>    The homescreen</Text>;
};

const styles = StyleSheet.create({
  text: {
    color : "white",
    backgroundColor : "black",
    fontSize: 40,
    height: 80
  }
});

export default HomeScreen;

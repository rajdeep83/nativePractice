import React, { useState, useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import MapView from 'react-native-maps';


const Map = () => {
    console.log("here");

    return (
        <View style= {styles.container}>
            <MapView 
                    style={styles.map}
                    // showsUserLocation={true}
                    initialRegion={{
                        latitude: 32.6192,
                        longitude: 77.3784,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>)
};

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

export default Map;

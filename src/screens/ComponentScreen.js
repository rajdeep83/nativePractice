import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ComponentScreen = () => {
    let arr = [
        {
            name: "Item 1"
        },
        {
            name: "Item 2"
        },
        {
            name: "Item 3"
        },
        {
            name: "Item 4",
        },
    ]
    return <FlatList 
                data={arr}  
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
        return (<Text key={item.name} style={styles.text}> {item.name}</Text>)
    }} />;
    // return (<Text> Hello</Text>)
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: "red",
        borderColor: "yellow",
        borderRadius: 1,
        borderWidth: 1,
        backgroundColor: "green",
        marginVertical: 20,
        width: 175
    }
});

export default ComponentScreen;
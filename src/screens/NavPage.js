import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { render } from "react-dom";

const ComponentScreen = (props) => {
    let [counter, setCounter] = useState(0)
    const handleNavigation = (item)=>{           console.log('item: ', item);
        props.navigation.navigate(item)
    }
    let handleClick = (increase)=> {
        if(increase){
            setCounter(counter+ 1)
        }
        else{
            setCounter(counter - 1)
        }
    }
    let arr = [ "HomePage", "ListPage", "Images"]
    return <View> 
     <Text style={styles.text}>Choose your menu</Text>
        <FlatList 
            data={arr}  
            keyExtractor={(item) => item}
            renderItem={({item}) => (<Button onPress={()=>handleNavigation(item)}  style={styles.text} title={item} />)} 
        />
        <Button onPress={()=>handleClick("increase")}  style={styles.text} title="Increase" />
        <Button onPress={()=>handleClick()}  style={styles.text} title={"Decrease"} />
        <Text> {counter}</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "red",
        marginVertical: 20,
        width: 375,
        textAlign : "center"
    },
});

export default ComponentScreen;
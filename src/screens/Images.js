import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Images = () => {
    let images = [{name : "image 1", url:""},{name : "image 2", url:""},{name : "image 3", url:""}]
  return (
        <View>
            <Text style={styles.text}>The Images :</Text>
            <FlatList 
            keyExtractor ={(image)=> image.name}
                data={images}  
                renderItem={({ item }) => <Image source={require("../../assets/Capture.png")}/>}
                />
        </View>
        );
};

const styles = StyleSheet.create({
  text: {
    color : "white",
    backgroundColor : "black",
    fontSize: 40,
    height: 80
  }
});

export default Images;

import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExercisesData } from "../Data/ParallaxImages";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';



const RenderCard = ({ item,fontsLoaded }) => {
  
  return (
    <TouchableOpacity>
      <View
        style={{
          borderRadius: 30,
          width: 190,
          backgroundColor: "red",
          overflow: "hidden",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          key={item.name}
          style={styles.singleCard}
          resizeMode="cover"
          source={item.image}
        >
          <Text style={[styles.text,{fontFamily:fontsLoaded.Roboto_700Bold}]}>{item.name}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const Exercises = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={ExercisesData}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <RenderCard fontsLoaded={fontsLoaded} item={item}/>}
      />
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  singleCard: {
    width: 200,
    height: 210,
    justifyContent:"flex-end"
  },
  text:{
    color:"white",
    textAlign:"center",
    marginBottom:15,
    fontSize:20
  }
});

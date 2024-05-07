import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { RED_COLOR } from "./Home";
import { FontAwesome } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import Parallax from "../Components/Parallax";
import Exercises from "../Components/Exercises";

export const GREY_COLOR = "#767778"


const Workout = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 

  return (
    <>
      <View style={styles.topTextAndProfile}>
        <View>
          <Text
            style={[styles.text, { fontFamily: fontsLoaded.Roboto_900Black }]}
          >
            READY TO
          </Text>
          <Text style={[styles.text, { marginTop: 15, color: RED_COLOR }]}>
            WORKOUT
          </Text>
        </View>
        <View >
          <TouchableOpacity>
            <Image
              style={styles.profile}
              source={require("../assets/gymlanding.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.profile,
                {
                  borderColor: "grey",
                  backgroundColor: "#dddfdf",
                  borderWidth: 2,
                  marginTop: 10,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <FontAwesome name="bell" size={25} color={GREY_COLOR}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.couraselContainer}>
        <Parallax/>
      </View>
      <View style={styles.exercisesContainer}>
        <Text style={[styles.text,{color:GREY_COLOR,fontSize:30,marginLeft:20,marginTop:20}]}>Exercises</Text>
        <Exercises/>
      </View>
    </>
  );
};

export default Workout;

const styles = StyleSheet.create({
  topTextAndProfile: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    alignItems: "center",
  },
  exercisesContainer: {
    flex: 4,
  },
  couraselContainer: {
    flex: 3,
    justifyContent:"center",
    alignItems:"center"
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    fontSize: 40,
    fontWeight:"bold"
  },
});

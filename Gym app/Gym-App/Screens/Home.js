import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';

export const RED_COLOR = "#f43f5e";

const Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 

  const textStyles = {
    color: "white",
    fontSize: 45,
    textAlign: "center",
    marginTop: 10,
    letterSpacing:2,
    fontFamily:fontsLoaded.Roboto_900Black
  }

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/gymlanding.jpg")}
      style={styles.container}
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      />
      <View style={styles.textAndButton}>
        <Text style={textStyles}>
         {" "} Best <Text style={{ color: RED_COLOR }}> Workouts </Text>{" "}
        </Text>
        <Text style={textStyles}>For You</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
          <View style={styles.button}>
            <Text style={[styles.buttonText,{fontFamily:fontsLoaded.Roboto_700Bold}]}>Get started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: RED_COLOR,
    width: "75%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    letterSpacing:2
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ORANGE_BUTTON_COLOR, WHITE_COLOR } from "../Constants/colors";

const Home = ({ navigation }) => {

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/IMAGES/welcome.png")}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{
            width: "100%",
            height: "60%",
            position: "absolute",
            bottom: 0,
          }}
        />
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Travelling made easy!</Text>
          <Text style={styles.beneath_title}>
            Experience the world best adventure around the world with us
          </Text>
          <View style={styles.btnContianer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TravelDetails")}
            >
              <View style={styles.button}>
                <Text style={styles.btnText}>Let's go!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContent: {
    height: "32%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 15,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 43,
    fontWeight: "600",
    letterSpacing: 2,
  },
  beneath_title: {
    color: WHITE_COLOR,
    marginTop: 10,
  },
  button: {
    width: "50%",
    backgroundColor: "red",
    alignSelf: "center",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ORANGE_BUTTON_COLOR,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    color: WHITE_COLOR,
    fontWeight: "bold",
  },
  btnContianer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Home;

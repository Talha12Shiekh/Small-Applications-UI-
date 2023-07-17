import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SCREENS_NAME } from "../App";


const BottomFruitBar = ({ botFruit }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen",{botFruit})}>
        <View style={[styles.bottomFruitsImageContainer]}>
          <Image
            style={styles.botFruitImage}
            resizeMode="contain"
            source={botFruit.image}
          />
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.bottomFruitView,
          { backgroundColor: botFruit.color(0.6) },
        ]}
      >
        <Text style={styles.botFruitPrice}>$ {botFruit.price}</Text>
      </View>
    </View>
  );
};

export default BottomFruitBar;

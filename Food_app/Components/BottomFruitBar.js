import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

const BottomFruitBar = ({ botFruit }) => {
  return (
    <View>
      <TouchableOpacity>
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

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

const FruitCard = ({ fruit }) => {
    const [isClicked,setisClicked] = useState(false);
  return (
    <View style={[styles.fruitCard, { backgroundColor: fruit.color(1) }]}>
      <View style={styles.heartContainer}>
        <TouchableOpacity onPress={() => setisClicked(!isClicked)}>
          <View style={[styles.heartIconContainer, styles.center]}>
            <Entypo name="heart" size={25} color={isClicked ? fruit.shadow : "white"} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.fruitImagecontainer,styles.center,{ shadowColor: fruit.shadow, shadowOpacity: 0.5, shadowRadius: 5,elevation:10 }]}>
        <Image
          style={styles.fruitImage}
          resizeMode="cover"
          source={fruit.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.fruitText}>{fruit.name}</Text>
        <Text style={styles.fruitText}>$ {fruit.price}</Text>
      </View>
    </View>
  );
};

export default FruitCard;

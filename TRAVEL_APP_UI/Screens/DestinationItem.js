import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { WHITE_COLOR } from "../Constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const DestinationItem = ({ item }) => {
  const { image, shortDescription, title } = item;

  const [liked, setliked] = useState(false);

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TravelItemDetails",{item})}>
      <View style={styles.singleDestinationItem}>
        <Image source={image} style={styles.imageStyles} resizeMode="cover" />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.5)"]}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 99999,
            borderRadius: 40,
          }}
        />
        <View style={styles.heartButton}>
          <TouchableOpacity onPress={() => setliked((l) => !l)}>
            <View style={styles.heartContainer}>
              <Entypo
                name="heart"
                size={24}
                color={liked ? "red" : WHITE_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.destination_item_title}>{title}</Text>
          <Text style={styles.destination_item_description}>
            {shortDescription}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationItem;

const styles = StyleSheet.create({
  singleDestinationItem: {
    width: 180,
    height: 340,
    borderRadius: 20,
    marginBottom: 10,
    position: "relative",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  heartButton: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 100,
    zIndex: 999999,
  },
  heartContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 25,
    width: "90%",
    alignSelf: "center",
    zIndex: 99999,
  },
  destination_item_title: {
    fontWeight: "bold",
    fontSize: 17,
    color: WHITE_COLOR,
    marginBottom: 10,
  },
  destination_item_description: {
    color: WHITE_COLOR,
    fontSize: 10,
    marginBottom: 10,
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  INPUT_BACKGROUND_COLOR,
  ORANGE_BUTTON_COLOR,
  WHITE_COLOR,
} from "../Constants/colors";

const ListItem = ({ listItem,index,activeIndex,setactiveIndex }) => {
  return (
    <TouchableOpacity onPress={() => setactiveIndex(index)}>
      <View style={[styles.listItem,activeIndex == index ? styles.whiteBackground : {}]}>
        <Text style={[styles.listText,activeIndex == index ? styles.orangeColor : {}]}>{listItem}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listText: {
    fontSize: 15,
  },
  listItem: {
    padding: 10,
    borderRadius: 100,
    marginRight: 22,
  },
  orangeColor: {
    color: ORANGE_BUTTON_COLOR,
  },
  whiteBackground: {
    backgroundColor: WHITE_COLOR,
  },
});

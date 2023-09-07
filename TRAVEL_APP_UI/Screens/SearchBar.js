import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import { GREY_COLOR } from "../Constants/colors";

const SearchBar = () => {
  return (
    <View style={[styles.searchBar, styles.center]}>
      <View style={styles.searchIcon}>
        <Feather name="search" size={24} color="black" />
      </View>
      <TextInput style={styles.input} placeholder="Search destination" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 999999,
    left: 35,
  },
  input: {
    padding: 20,
    backgroundColor: GREY_COLOR,
    width: "90%",
    borderRadius: 50,
    fontSize: 15,
    paddingLeft: 50,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

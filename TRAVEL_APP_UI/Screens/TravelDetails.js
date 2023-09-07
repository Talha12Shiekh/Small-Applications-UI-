import { KeyboardAvoidingView, View } from "react-native";
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import FilterList from "./FilterList";
import TravelItems from "./TravelItems";

const TravelDetails = () => {
  return (
    <KeyboardAvoidingView enabled behavior="height" style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <SearchBar />
        <Categories />
        <FilterList />
        <TravelItems />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TravelDetails;

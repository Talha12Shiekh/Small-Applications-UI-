import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { categoriesData } from "../Constants";
import CategoryItem from "../Components/CategoryItem";
import { ORANGE_BUTTON_COLOR } from "../Constants/colors";

const Categories = () => {
  return (
    <View style={styles.categories}>
      <View style={styles.categoriesTextContainer}>
        <Text style={styles.categoryText}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesData.map((category, index) => {
          return <CategoryItem key={index} {...category} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    flex: 1.2,
    paddingHorizontal: 10,
  },
  categoriesTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  seeAllText: {
    color: ORANGE_BUTTON_COLOR,
  },
});

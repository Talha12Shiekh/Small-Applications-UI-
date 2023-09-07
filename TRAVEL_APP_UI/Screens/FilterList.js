import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../Components/ListItem";
import { sortCategoryData } from "../Constants";
import { GREY_COLOR } from "../Constants/colors";

const FilterList = () => {
    const [activeIndex, setactiveIndex] = useState(0);
  return (
    <View style={styles.travelList}>
      <View
        style={[styles.listContianer, { flexDirection: "row",justifyContent:"center",alignItems:"center" }]}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sortCategoryData.map((listItem, index) => (
            <ListItem
              key={index}
              listItem={listItem}
              index={index}
              activeIndex={activeIndex}
              setactiveIndex={setactiveIndex}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FilterList;

const styles = StyleSheet.create({
    travelList: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },

      listContianer: {
        backgroundColor: GREY_COLOR,
        borderRadius: 30,
        height: 60,
        paddingHorizontal: 10,
        width: "95%",
      },
});

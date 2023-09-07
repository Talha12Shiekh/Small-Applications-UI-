import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { destinationData } from "../Constants";
import DestinationItem from "./DestinationItem";

const TravelItems = () => {
  return (
    <View style={styles.travelItems}>
      <ScrollView>
        <View style={styles.destination_container}>
          {destinationData.map((item, index) => {
            return <DestinationItem item={item} key={index} />
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TravelItems;

const styles = StyleSheet.create({
  destination_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    marginHorizontal: 20,
  },
  travelItems: {
    flex: 3,
  },
});

import { View, StyleSheet, FlatList } from "react-native";
import React, { Suspense,lazy } from "react";
const SingleCard = lazy(() => import("./SingleCard"))
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CARDS_DATA } from "../Constants";
import LazyCards from "./LazyCards";

export default function Cards() {
  return (
    <Suspense fallback={<LazyCards flex={1}/>}>
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CARDS_DATA}
        numColumns={2}
        renderItem={({ item }) => {
          const { title, image, price } = item;
          return <SingleCard title={title} image={image} price={price} />;
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: hp(2),
  },
});

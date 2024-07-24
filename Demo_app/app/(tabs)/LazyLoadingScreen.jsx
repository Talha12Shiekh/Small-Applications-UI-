import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CARD_BACKGROUND } from "../../Constants";
import { FlatList } from "react-native";
import LazyCards from "../../Components/LazyCards";

export const LazyLoadingScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={styles.appbar}>
        <View style={styles.leftSide}>
          <View>
            <View style={styles.image} />
          </View>
          <View>
            <View style={styles.image} />
          </View>
        </View>
        <View style={styles.rightSide}>
          <View>
            <View style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.discountCard}>
        <View style={styles.card} />
      </View>
      <View style={styles.scrollList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[1, 2, 3, 4,5]}
          renderItem={(_) => <View style={[styles.textContainer]} /> }
          keyExtractor={(item) => item}
        />
      </View>
      <LazyCards flex={0.5}/>
    </View>
  );
};


const styles = StyleSheet.create({
  appbar: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(6),
  },
  discountCard: {
    flex: 0.4,
    paddingHorizontal: wp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  scrollList: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(6),
    flexDirection: "row",
  },
  image: {
    width: wp(10),
    aspectRatio: 1,
    borderRadius:10,
    backgroundColor: CARD_BACKGROUND,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(5),
  },
  card: {
    width: "100%",
    backgroundColor: CARD_BACKGROUND,
    height: hp(21),
    borderRadius: 30,
  },
  textContainer: {
    padding: 18,
    borderRadius: 18,
    marginRight:wp(10),
    paddingHorizontal:30,
    backgroundColor:CARD_BACKGROUND,
    borderRadius:10,
  }
});

import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CARD_BACKGROUND, PURCHASE_TEXT_COLOR } from "../Constants";


export default DiscountCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <View style={styles.firstText}>
            <Text style={[styles.text, { fontSize: hp(4),marginBottom:-5 }]}>20%</Text>
            <Text style={[styles.text, { fontSize: hp(2.5) }]}>Discount</Text>
          </View>
          <View style={styles.secondText}>
            <Text style={styles.purchaseText}>on your first purchase</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Shop now</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.shoeImage} source={require("../assets/images/Shoe.png")}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    paddingHorizontal: wp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: CARD_BACKGROUND,
    height: hp(21),
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 30,
    position:"relative"
  },
  text: {
    color: "black",
    fontFamily: "WorkSans_600SemiBold",
  },
  firstText: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  purchaseText: {
    color: PURCHASE_TEXT_COLOR,
    fontFamily: "WorkSans_400Regular",
  },
  textContainer:{
    marginBottom:25,
  },
  button:{
    backgroundColor:"black",
    width:wp(27),
    borderRadius:20,
    padding:10,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    color:"white",
    fontSize:10,
    fontFamily: "WorkSans_600SemiBold",
  },
  imageContainer:{
    position:"absolute",
    right:-30,
  },
  shoeImage:{
    height:hp(65),
    width:wp(65),
    transform:[{translateX:-10}]
  }
});

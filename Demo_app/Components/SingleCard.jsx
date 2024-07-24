import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CARD_BACKGROUND } from "../Constants";
import { AntDesign } from '@expo/vector-icons';

const SingleCard = ({image,title,price}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          style={styles.singleShoeImage}
          source={image}
        />
        <Text style={styles.firstText}>{title}</Text>
        <Text style={[styles.firstText, styles.secondText]}>${price}</Text>

    
        <View style={styles.arrow}>
<TouchableOpacity>
    <View style={styles.arrowButton}>

        <AntDesign name="arrowright" size={15} color="black" />
    </View>
</TouchableOpacity>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  card: {
    width: wp(41),
    backgroundColor: CARD_BACKGROUND,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: hp(1),
    position:"relative",
    marginRight:wp(5),
    marginBottom:wp(5),
  },
  singleShoeImage: {
    height: wp(40),
    width: wp(45),
    marginRight: wp(7),
  },
  firstText: {
    color: "black",
    alignSelf: "flex-start",
    marginLeft: wp(4),
    fontSize: wp(3.5),
    fontFamily: "WorkSans_600SemiBold",
  },
  secondText: {
    fontFamily: "WorkSans_400Regular",
  },
  arrow:{
    width:wp(7),
    aspectRatio:1,
    backgroundColor:"white",
    position:"absolute",
    
    borderRadius:5,
    right:10,
    justifyContent:"center",
    alignItems:'center',
    bottom:20
  },
  arrowButton:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
  }
});

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.leftSide}>
          <TouchableOpacity>
            <View style={styles.menuContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/images/Menu.png")}
              />
            </View>
                </TouchableOpacity>
            <View>
              <Image
                resizeMode="cover"
                style={styles.nike}
                source={require("../assets/images/Nike.png")}
              />
            </View>
        </View>
        <View style={styles.rightSide}>
        <TouchableOpacity>
            <View style={styles.menuContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={require("../assets/images/Shop.png")}
              />
            </View>
                </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  appBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(6),
  },
  image: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    borderRadius: 10,
  },
  leftSide:{
    flexDirection:"row",
    alignItems:"center",
    gap:wp(5)
  },
  nike:{
    width:wp(20),
    apsectRatio:1,
  }
});

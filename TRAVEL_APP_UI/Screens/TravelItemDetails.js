import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { ORANGE_BUTTON_COLOR, WHITE_COLOR } from "../Constants/colors";

const SingleInfromation = ({ Icon, firstText, secondText }) => {
  return (
    <>
      <View style={styles.singleInformation}>
        <View style={styles.informationItemIcon}>{Icon}</View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{firstText}</Text>
          <Text>{secondText}</Text>
        </View>
      </View>
    </>
  );
};

const TravelItemDetails = ({ route, navigation }) => {
    const [liked, setliked] = useState(false);
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Ionicons name="chevron-back" size={30} color={WHITE_COLOR} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.heartButton}>
          <TouchableOpacity onPress={() => setliked((l) => !l)}>
            <View style={styles.heartContainer}>
              <Entypo
                name="heart"
                size={24}
                color={liked ? "red" : WHITE_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>
      <View style={styles.backImageContainer}>
        <Image source={item.image} style={styles.backImage} />
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetTopText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {item.longDescription}
          </Text>
        </View>
        <View style={styles.informationContainer}>
          <SingleInfromation
            Icon={
              <MaterialCommunityIcons
                name="clock"
                size={24}
                color="blue"
              />
            }
            firstText={item.duration}
            secondText={"Duration"}
          />
          <SingleInfromation
            Icon={
                <Entypo name="location-pin" size={24} color="red" />
            }
            firstText={item.distance}
            secondText={"Distance"}
          />
          <SingleInfromation
            Icon={
                <Feather name="sun" size={24} color={ORANGE_BUTTON_COLOR} />
            }
            firstText={item.weather}
            secondText={"Weather"}
          />
        </View>
        <View style={styles.bookNowButtonContainer}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Book now</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TravelItemDetails;

const styles = StyleSheet.create({
  backImageContainer: {
    width: "100%",
    height: "50%",
  },
  container: {
    flex: 1,
  },
  backImage: {
    width: "100%",
    height: "100%",
  },
  backArrowContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 100,
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 99999999,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    height: "60%",
    backgroundColor: WHITE_COLOR,
    zIndex: 9999999999999,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    bottom: 40,
  },
  bottomSheetTopText: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    alignSelf: "center",
    position: "absolute",
    right: 20,
    fontSize: 25,
    color: ORANGE_BUTTON_COLOR,
  },
  descriptionContainer: {
    width: "90%",
    alignSelf: "center",
  },
  descriptionText: {
    color: "grey",
  },
  informationContainer: {
    height: "20%",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  singleInformation: {
    flexDirection: "row",
    width: "33%",
    alignSelf: "center",
    justifyContent:"space-around",
    marginRight:5
  },
  informationItemIcon: {
    marginRight: 10,
    marginTop: 5,
  },
  button: {
    width: "50%",
    backgroundColor: "red",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ORANGE_BUTTON_COLOR,
    borderRadius: 30,
    marginBottom:60
  },
  btnText: {
    fontSize: 20,
    color: WHITE_COLOR,
    fontWeight: "bold",
  },
  bookNowButtonContainer:{
    position:"relative",
    flex:1,
    justifyContent:"flex-end"
  },
  heartButton: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "absolute",
    top: 40,
    right: 20,
    borderRadius: 100,
    zIndex: 999999,
  },
  heartContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

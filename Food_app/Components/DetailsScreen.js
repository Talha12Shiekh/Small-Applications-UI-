import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ navigation,route }) => {
  const {botFruit:item} = route.params;
  return (
    <View
      style={[styles.container, { backgroundColor: item.color(1) }]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.arrowContainer, styles.center]}>
          <Ionicons name="chevron-back-outline" size={32} color="white" />
        </View>
      </TouchableOpacity>
      <View style={[styles.fruitImageContainer]}>
        <Image source={item.image} resizeMode="contain" style={styles.detailsImage}/>
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.fruitnameContainer}>{item.name}</Text>
        <View style={styles.flavour_price_container}>
          <Text>{item.desc}</Text>
          <Text>
            Sold <Text style={styles.bold}>239</Text>
          </Text>
        </View>
        <View style={styles.starsContainer}>
          {
            Array(item.stars).fill().map((_,i) => {
              return <FontAwesome key={i} name="star" size={24} color="gold" />
            })
          }
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into 
          </Text>
        </View>
        <View style={styles.price_cart_container}>
          <Text style={styles.priceText}>$ {item.price}</Text>
          <TouchableOpacity style={[styles.button,styles.center,{backgroundColor:item.shadow}]}>
            <Text style={styles.btntext}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { cartItems } from "../Constants/FruitsData";

const SingleCartItem = (item) => {
  return (
    <View style={styles.cartItem}>
      <View>
        <View>
          <Image
            style={styles.botFruitImage}
            resizeMode="contain"
            source={item.image}
          />
        </View>
        <View
          style={[
            styles.bottomFruitView,
            {
              backgroundColor: item.color(0.4),
              transform: [{ translateX: 20 }, { translateY: -15 }],
            },
          ]}
        />
      </View>
      <View style={styles.cartName_and_price_container}>
        <Text style={[styles.bold, { fontSize: 20, marginBottom: 5 }]}>
          {item.name}
        </Text>
        <Text style={[styles.bold, { color: "#e9c60bcf" }]}>${item.price}</Text>
      </View>
      <View style={styles.counterContainer}>
      <TouchableOpacity>
        <View style={[styles.counterButton, styles.center]}>
          <Text style={styles.white}>+</Text>
        </View>
      </TouchableOpacity>
      <Text>{item.qty}</Text>
      <TouchableOpacity>
        <View style={[styles.counterButton, styles.center]}>
          <Text style={styles.white}>-</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={[
            styles.arrowContainer,
            styles.center,
            { borderColor: "grey" },
          ]}
        >
          <Ionicons name="chevron-back-outline" size={32} color="grey" />
        </View>
      </TouchableOpacity>
      <View style={styles.cartItems}>
        <View>
          <Text style={styles.cartText}>
            Your <Text style={styles.bold}>Cart</Text>
          </Text>
        </View>
        {cartItems.map((item) => {
          return <SingleCartItem key={item.qty} {...item} />;
        })}
      </View>
      <View>
        <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total Price : <Text style={[styles.bold,{color:"orange"}]}>420.80</Text></Text>
        </View>
        <TouchableOpacity>
            <View style={[styles.paymentButton,styles.center]}>
                <Text style={[styles.bold,styles.white,{fontSize:20}]}>Payment</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

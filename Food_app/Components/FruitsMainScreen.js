import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Feather, Entypo } from "@expo/vector-icons";
import { categories, featuredFruits } from "../Constants/FruitsData";
import FruitCard from "./FruitCard";
import BottomFruitBar from "./BottomFruitBar";
const FruitsMainScreen = () => {
  const [categoryActiveIndex, setcategoryActiveIndex] = useState(0);

  return (
    <View style={[styles.container, { padding: 20 }]}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity>
          <View style={styles.center}>
            <Feather name="menu" size={25} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.cartContainer, styles.center]}>
            <Entypo name="shopping-cart" size={22} color="orange" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.seasonal}>Seasonal</Text>
        <Text style={styles.fruits_and_vegetables}>Fruits and Vegetables</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            let isActive = index == categoryActiveIndex;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setcategoryActiveIndex(index)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: isActive ? "black" : "grey" },
                  ]}
                >
                  {category}
                </Text>
                <View
                  style={[styles.txtBottomLine, { opacity: isActive ? 1 : 0 }]}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.fruitCardsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit,index) => {
            return <FruitCard key={index} fruit={fruit} />
          })}
        </ScrollView>
      </View>
      <Text style={styles.hotText}>Hot Sales</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          [...featuredFruits].reverse().map((botFruit,index) => {
            return <BottomFruitBar key={index} botFruit={botFruit}/>
          })
        }
      </ScrollView>
    </View>
  );
};

export default FruitsMainScreen;

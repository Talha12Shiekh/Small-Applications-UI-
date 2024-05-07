import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { ParallaxImages } from "../Data/ParallaxImages";

const Parallax = () => {
  const { width: screenWidth } = useWindowDimensions();
  return (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 50}
      data={ParallaxImages}
      renderItem={({item,index},parallaxProps) => {
        return <View key={item.key} style={[styles.item,{
          width: screenWidth - 50,
          height: screenWidth - 50,
        }]}>
          <ParallaxImage
            source={item.image}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={1}
            {...parallaxProps}
          />
        </View>
      }}
      hasParallaxImages={true}
    />
  );
};

export default Parallax;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height:250,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },
  image:{
    resizeMode:'contain',
    width:"100%",
    height:"100%"
  }
});

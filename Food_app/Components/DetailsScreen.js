import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  useWindowDimensions,
} from "react-native";
import React, { useRef } from "react";
import styles from "./styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ navigation, route }) => {
  const { botFruit: item } = route.params;

  const ImageAnimation = useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();
  const BottomSheetAnimation = useRef(new Animated.Value(height)).current;
  const TextAnimation = useRef(new Animated.Value(0)).current;
  const DescriptionsAnimation = useRef(new Animated.Value(0)).current;
  const PriceAnimation = useRef(new Animated.Value(0)).current;
  const ButtonScaleAnimation = useRef(new Animated.Value(0)).current;

  let starsArray = Array(item.stars).fill({ animation: new Animated.Value(0) });

  const ANIMATION_DURATION = 500;

  const AnimateToValue = (animation,toValue,duration = ANIMATION_DURATION) => {
    return Animated.timing(animation,{
      toValue,
      duration,
      useNativeDriver:true
    })
  }

  React.useEffect(() => {
    Animated.sequence([
      AnimateToValue(ImageAnimation,1),
      AnimateToValue(BottomSheetAnimation,0),
      AnimateToValue(TextAnimation,1),
    ]).start(({ finished }) => {
      if (finished) {
        starsArray.map((star, index) => {
          return Animated.sequence([
            Animated.delay(index * 100),
            AnimateToValue(star.animation,1),
          ]).start(({ finished }) => {
            if (finished) {
              Animated.sequence([
                AnimateToValue(DescriptionsAnimation,1),
                AnimateToValue(PriceAnimation,1),
                AnimateToValue(ButtonScaleAnimation,1)
              ]).start();
            }
          });
        });
      }
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: item.color(1) }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.arrowContainer, styles.center]}>
          <Ionicons name="chevron-back-outline" size={32} color="white" />
        </View>
      </TouchableOpacity>
      <View style={[styles.fruitImageContainer]}>
        <Animated.Image
          source={item.image}
          resizeMode="contain"
          style={[
            styles.detailsImage,
            {
              transform: [{ scale: ImageAnimation }],
            },
          ]}
        />
      </View>
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            transform: [{ translateY: BottomSheetAnimation }],
          },
        ]}
      >
        <Animated.View style={{ opacity: TextAnimation }}>
          <Text style={[styles.fruitnameContainer]}>{item.name}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.flavour_price_container, { opacity: TextAnimation }]}
        >
          <Text>{item.desc}</Text>
          <Text>
            Sold <Text style={styles.bold}>239</Text>
          </Text>
        </Animated.View>
        <View style={styles.starsContainer}>
          {starsArray.map((_, i) => {
            return (
              <Animated.View style={{ transform: [{ scale: _.animation }] }}>
                <FontAwesome key={i} name="star" size={24} color="gold" />
              </Animated.View>
            );
          })}
        </View>
        <Animated.View
          style={[styles.textcontainer, { opacity: DescriptionsAnimation }]}
        >
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </Text>
        </Animated.View>
        <View style={[styles.price_cart_container]}>
          <Animated.View style={{ opacity: PriceAnimation }}>
            <Text style={styles.priceText}>$ {item.price}</Text>
          </Animated.View>
          <Animated.View
            style={{ transform: [{ scale: ButtonScaleAnimation }], flex: 1 }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                styles.center,
                { backgroundColor: item.shadow },
              ]}
            >
              <Text style={styles.btntext}>Add to Cart</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default DetailsScreen;

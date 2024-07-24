import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SCROLL_LIST_DATA ,LIST_TEXT_COLOR} from "../Constants";

const Item = ({ title, index, currentItem, setCurrentItem }) => {
  const backgroundColor = index == currentItem ? "black" : "transparent";
  const color = index == currentItem ? "white" : LIST_TEXT_COLOR;
  return (
    <TouchableOpacity onPress={() => setCurrentItem(index)}>
      <View
        style={[styles.textContainer, { backgroundColor }]}
      >
        <Text style={[styles.item,{color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function ScollList() {
  const [currentItem, setCurrentItem] = useState(0);


  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={SCROLL_LIST_DATA}
        renderItem={({ item, index }) => {
          
          return <Item
            index={index}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            title={item.name}
          />
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(6),
    flexDirection: "row",
  },
  item: {
    fontFamily: "WorkSans_600SemiBold",
  },
  textContainer: {
    padding: 10,
    borderRadius: 18,
    marginRight:wp(3),
    paddingHorizontal:20
  },
});

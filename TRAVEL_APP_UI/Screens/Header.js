import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React from "react";

const Header = () => {

  return (
    <View style={styles.topHeader}>
      <View>
        <Text style={styles.topHeaderText}>Let's Discover</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.avatarImage}
            source={require("../assets/IMAGES/avatar.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  topHeaderText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

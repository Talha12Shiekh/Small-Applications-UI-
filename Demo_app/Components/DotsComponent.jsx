import { View, StyleSheet } from 'react-native';
import {CARD_BACKGROUND} from "../Constants";

export default function DotsComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.dContainer}>
        {
          [1,2,3,4].map(dot => <View key={dot} style={[styles.dot,{backgroundColor:dot == 1 ? "black" : CARD_BACKGROUND}]}></View>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  dContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    gap:13
  },
  dot:{
    width:10,
    aspectRatio:1,
    borderRadius:10
  }
});
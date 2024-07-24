import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { CARD_BACKGROUND } from '../Constants'

const LazyCards = ({flex}) => {
  return (
    <View style={[styles.cards,{flex}]}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={[1,2,3,4]}
      numColumns={2}
      renderItem={_ => {
        return  <View style={styles.shoescard} />
      }}
      keyExtractor={(item) => item}
    />
    </View>
  )
}

export default LazyCards

const styles = StyleSheet.create({
    cards: {
        paddingHorizontal: wp(6),
      },
      shoescard: {
        width: wp(41),
        backgroundColor: CARD_BACKGROUND,
        borderRadius: 15,
        marginRight:wp(5),
        marginBottom:wp(5),
        paddingVertical: hp(12),
      },
})
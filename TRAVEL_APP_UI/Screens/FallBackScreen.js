import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FallBackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading ...</Text>
    </View>
  )
}

export default FallBackScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingText:{
        fontSize:30,
        fontWeight:"bold"
    }
})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../Components/AppBar'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <AppBar/>
      <View style={{flex:0.5}}></View>
      <View style={{flex:0.5}}></View>
      <View style={{flex:1}}></View>
      <View style={{flex:1}}></View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { INPUT_BACKGROUND_COLOR } from '../Constants/colors'

const CategoryItem = ({title,image}) => {
  return (
    <View style={styles.singleCategoryItem}>
      <View style={styles.categoryImageContainer}>
        <Image style={styles.categoryImage} resizeMode='cover' source={image}/>
      </View>
      <Text style={{textAlign:"left",color:"grey",fontSize:12,marginTop:5}}>{title}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    singleCategoryItem:{
        width:"20%",
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    categoryImageContainer:{
        width:70,
        aspectRatio:1,
    },
    categoryImage:{
        width:"100%",
        height:"100%",
        borderRadius:20,
    }
})
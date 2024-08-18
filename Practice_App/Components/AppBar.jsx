import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ICON_COLOR } from '../Constants'
import Feather from '@expo/vector-icons/Feather';

const AppBar = () => {
  return (
    <View style={styles.container}>
        <View>
      <Text style={styles.topText}>Hello, <Text style={styles.orange}>Fahmi</Text></Text>
      <Text style={styles.text}>find the right one</Text>
      <Text style={styles.text}>for a healthy body</Text>
      </View>
      <View>
        <TouchableOpacity>
        <View style={styles.bellContainer}>
            <Feather name="bell" size={24} color={ICON_COLOR} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        paddingHorizontal:wp(6),
        paddingTop:hp(6),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    topText:{
        fontSize:hp(2.5),
        fontWeight:"200",
        fontFamily:"Montserrat_300Light",
        marginBottom:5
    },
    orange:{
        color:ICON_COLOR,
        fontWeight:"500",
         fontFamily:"Montserrat_700Bold",
         color:"orange"
    },
    text:{
        fontSize:hp(2.3),
        textTransform:"capitalize",
        fontFamily:"Montserrat_700Bold",
        marginBottom:3
    },
    bellContainer:{
        width:50,
        aspectRatio:1,
        borderColor:"grey",
        borderWidth:.5,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    }
})
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 

export default function TopBar(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
        <Text style={styles.title}>UNcademy</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AcadRec')}>
          <Entypo name="menu" size={30} color="#492A55" style={styles.icon}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#f2f2f2',
      marginTop: 25,
      marginBottom:5,
      marginHorizontal:13,
      flexDirection:'row',
      padding:5,
      borderRadius:30,
      alignItems:'center'
    },
    title:{
        color:"red",
        fontSize:20,
        fontWeight:'bold'
    },
    icon:{
        marginLeft:120,
        padding:5,
        borderRadius:10,
        alignItems:'center'
    },
    pressedIcon:{
        marginLeft:120,
        backgroundColor:'#492A55',
        padding:5,
        borderRadius:10,
        alignItems:'center'
    },
    logo:{
        width:40,
        height:45,
        marginRight:10,
        marginLeft:5
    }
});
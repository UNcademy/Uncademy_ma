import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'

export default function HomePage(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopBar navigation = {navigation}/>
      <View style={styles.content}>
        <Text style={styles.text}>HomePage</Text>
        <Button
          title="Ir al Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#033B86',
    height:'100%'
  },
  text:{
    fontSize:20,
    color:'red',
  },
  content:{
    backgroundColor:'#F2F2F2',
    borderRadius:30,
    alignItems:'center',
    marginVertical:25,
    padding:10,
    marginHorizontal:10,
    height:'80%'
  }
})

  
    

  


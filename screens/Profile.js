import React, { useState } from "react";
import { viewProfile } from "../gql/queries";
import { useQuery } from "@apollo/client";
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native'
import TopBar from '../components/TopBar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

export default function Profile(props) {

  const [username, setUsername] = useState("");
  const { navigation } = props;

  const getData = async () => {
    let decodedData
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key').then(
        (result) => {
          decodedData = result
        }
      )
    } catch (e) {
      console.log(e)
    }
    
    return jwt_decode(decodedData)
  }

  const jsonData = getData().then(
    (decoded) => {
      setUsername(decoded.username);
    }
  )

  if (username == undefined){
    return <Text>Cargando....</Text>
  }

  const { data, loading, error } = useQuery(viewProfile, {
    variables:{
      username:username
    },
  });

  if (loading) {
    return <Text>Obteniendo datos...</Text> //while loading return this
  }

  if (error) {
    console.log(error)
    return <Text>Error obteniendo los datos pero conecta</Text>
  }
  const DATA = data.viewProfile.data

  return (
    <View style={styles.container}>
      <TopBar navigation = {navigation}/>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.text}>
            Perfil{"\n"}
            Usuario: {DATA.UserName}
            </Text>
          <Button
            title="Editar perfil"
            onPress={() => navigation.navigate('EditProfile', {DATA: DATA})}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Datos Personales</Text>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Nombre Completo</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.FullName}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Edad</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.Age}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Documento</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.Document}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Dep. de expedición</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.DepDocument}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Ciudad de expedición</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.CityDocument}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Género biológico</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.Genre}</Text>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Correo electrónico personal</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.Email}</Text>
          </View>
          <View style={styles.dataView}>
            <View style={[styles.profileText, {width:'38%', flexDirection:'row', justifyContent:'space-between'}]}>
              <Text style={styles.profileTitle}>RH</Text>
              <Text style={{alignSelf:'flex-end'}}>{DATA.BloodType}</Text>
            </View>
            <View style={[styles.profileText, {width:'58%', flexDirection:'row', justifyContent:'space-between'}]}>
              <Text style={styles.profileTitle}>Tarjeta Militar</Text>
              <Text style={{alignSelf:'flex-end'}}>{!DATA.ArmyCard ?'No':'Si'}</Text>
            </View>
          </View>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Datos de nacimiento</Text>
          <View style={styles.dataView}>
            <View style={[styles.profileText, {width:'50%'}]}>
              <Text style={styles.profileTitle}>Lugar de Nacimiento</Text>
              <Text style={{alignSelf:'flex-end'}}>{DATA.BirthPlace}</Text>
            </View>
            <View style={[styles.profileText, {width:'40%'}]}>
              <Text style={styles.profileTitle}>País</Text>
              <Text style={{alignSelf:'flex-end'}}>{DATA.Country}</Text>
            </View>
          </View>  
          <Text style={{fontSize:20, fontWeight:'bold'}}>Datos de contacto</Text>
          <View style={styles.dataView}>
            <View style={[styles.profileText, {width:'50%'}]}>
              <Text style={styles.profileTitle}>Teléfono celular</Text>
              <Text style={{alignSelf:'flex-end'}}>{DATA.Cel}</Text>
            </View>
            <View style={[styles.profileText, {width:'40%'}]}>
              <Text style={styles.profileTitle}>Teléfono fijo</Text>
              <Text style={{alignSelf:'flex-end'}}>{DATA.Tel}</Text>
            </View>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Dirección</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.Address}</Text>
          </View>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Datos de acudientes</Text>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Nombre del Padre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.FatherFullName}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Documento del Padre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.FatherDocument}</Text>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Nombre de la Madre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.MotherFullName}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Documento de la Madre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.MotherDocument}</Text>
          </View>
        </ScrollView>
      </View>  
    </View>
  )
/* 
    return (
        <FlatList
          data={data.getStats}
          renderItem={({ item }) => <SubjectItem subject={item} />}
          keyExtractor={(item, index) => index}
        />
    ); */
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#A9C2D9',
    height:'100%'
  },
  text:{
    fontSize:15,
    color:'#5DA7DB',
    fontWeight:'bold'
  },
  content:{
    backgroundColor:'#F2F2F2',
    borderRadius:30,
    marginVertical:25,
    padding:10,
    marginHorizontal:10,
    height:'80%'
  },
  title:{
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingBottom:10,
    alignContent:'center'
  },
  profileText:{
    color:'aaa',
    paddingVertical:5,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#009B86',
    borderRadius:10,
    marginHorizontal:5,
    justifyContent:'flex-end',
    marginVertical:10
  },
  dataView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5
  },
  profileTitle:{
    color:'red', 
    fontWeight:'bold',
    fontSize:15
  }
})
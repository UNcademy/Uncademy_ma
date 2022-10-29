import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TextInput} from 'react-native'
import TopBar from '../components/TopBar'
import { updateProfile } from '../gql/queries';
import { useQuery, useMutation } from "@apollo/client";

export default function EditProfile(props) {
    const { route, navigation } = props;
    const {DATA} = route.params

    const username = DATA.UserName
    const [email, onChangeEmail] = React.useState(DATA.Email);
    const [phone, onChangePhone] = React.useState(DATA.Cel.toString());
    const [tel, onChangeTel] = React.useState(DATA.Tel.toString());
    const [address, onChangeAddress] = React.useState(DATA.Address)

    const [runMutation, {loading,error}] = useMutation(updateProfile,{
        variables:{
            username:username,
            Email: email,
            Cel: phone,
            Tel: tel,
            Address: address
        },
        onCompleted:()=>{
            navigation.navigate('Home')
        }
    })

    if (loading) {
        return <Text>Obteniendo datos...</Text> //while loading return this
        }
    if (error) {
        console.log(error)
    return <Text>Error obteniendo los datos. pero funciona</Text>
    }

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
                title="Guardar Cambios"
                onPress={() => runMutation()}
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
            <View style={styles.profileEditable}>
                <Text style={styles.profileTitle}>Correo electrónico personal</Text>
                <TextInput style={{alignSelf:'flex-end'}} value={email} onChangeText={onChangeEmail} placeholder="Correo electrónico"/>
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
                <View style={[styles.profileEditable, {width:'50%'}]}>
                <Text style={styles.profileTitle}>Teléfono celular</Text>
                <TextInput style={{alignSelf:'flex-end'}} value={phone} onChangeText={onChangePhone} placeholder="Teléfono celular"
        keyboardType="numeric"/>
                </View>
                <View style={[styles.profileEditable, {width:'40%'}]}>
                <Text style={styles.profileTitle}>Teléfono fijo</Text>
                <TextInput style={{alignSelf:'flex-end'}} value={tel} onChangeText={onChangeTel} placeholder="Teléfono fijo"
        keyboardType="numeric"/>
                </View>
            </View>
            <View style={styles.profileEditable}>
                <Text style={styles.profileTitle}>Dirección</Text>
                <TextInput style={{alignSelf:'flex-end'}} value={address} onChangeText={onChangeAddress} placeholder="Dirección"/>
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
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#033B86',
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
    },
    profileEditable:{
        color:'aaa',
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'#009B86',
        borderRadius:10,
        marginHorizontal:5,
        justifyContent:'flex-end',
        marginVertical:10
    },
  })
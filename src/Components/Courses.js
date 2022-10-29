import { useQuery, gql } from '@apollo/client';
import { FlatList, StyleSheet, Text, View, Item, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

export const GET_COURSES = gql`
    query getMaterias($id: String!) {
        getMaterias(id: $id) {
        materiaId
        tipologia
        nombre
        nota
        aprobado
        creditos
        }
    }
`;

function Courses() {
    /*
    const test = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImF1dGhvcml6YXRpb24iOiJhZG1pbiJ9.f7iKN-xi24qrQ5NQtOe0jiriotT-rve3ru6sskbQXnA";
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
            //console.log(jsonValue)
            //console.log(jwt_decode(jsonValue));
        } catch (e) {
            console.log(e)
            // saving error
        }
    }
    storeData(test); 
    

    Test token
    */
    const [username, setUsername] = useState("");

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
            setUsername(decoded.userId);
        }
    )

    if (username == undefined) {
        return <Text>Cargando....</Text>
    }

    const { loading, error, data } = useQuery(GET_COURSES, {
        variables: {
            id: username
        },
    });

    if (loading) {
        return <Text>Obteniendo datos...</Text> //while loading return this
    }

    if (error) {
        console.log(error)
        return <Text>Error obteniendo los datos pero conecta</Text>
    }


    const DATA = data.getMaterias[0];
    return (
        
        <View>
            
            <ScrollView>
                <View style={styles.container}>

                            <View style={styles.item}>
                                
                                <Text> 
                                    <Text style={styles.columnRow}>Nombre: {DATA.nombre} </Text>
                                    <Text style={styles.columnRow}>{'              '}</Text>
                                    <Text style={styles.columnRow}>Tipologia: {DATA.tipologia} </Text>
                                    <Text style={styles.columnRow}>{'                 '}</Text>
                                    <Text style={styles.columnRow}>Creditos: {DATA.creditos} </Text>
                                    <Text>{'                      '}</Text>
                                    Nota: {DATA.nota}
                                </Text>
                                <ItemDivider></ItemDivider>
                            </View>
                </View>
            </ScrollView>
        </View>

    );


}

const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000000",
          marginTop: 8,
        }}
      />
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#A61000',
        borderRadius: 10,
        textAlign:'center'
    },
    item: {
        padding: 10,
        fontSize: 15,
        marginBottom: 2,
    },
    columnRow: {
        flex: 4,
        textAlign: "center",
        justifyContentnt: "space-evenly",
        marginTop: 2,
      },
});

export default Courses;




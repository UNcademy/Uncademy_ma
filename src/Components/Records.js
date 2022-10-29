import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { GETRECORD } from '../GraphQL/Queries.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";


function Records() {
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

    const { loading, error, data } = useQuery(GETRECORD, {
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

    const DATA = data.getAcademic[0];
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                            <View style={styles.item}>
                                <Text style={styles.columnRow} > Creditos Inscritos: {DATA.creditosInscritos}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Creditos Aprobados: {DATA.creditosAprobados}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Creditos Pendientes: {DATA.creditosPendientes}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Creditos Cursados: {DATA.creditosCursados}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Creditos Cancelados: {DATA.creditosCancelados}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Papa: {DATA.papa}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Pa: {DATA.pa}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Pappi: {DATA.pappi}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Semestre: {DATA.semestre}</Text>
                                <ItemDivider></ItemDivider>

                                <Text style={styles.columnRow} > Avance: {DATA.avance}</Text>
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
    },
    container2: {
        padding: 20,
        flex: 1,
        backgroundColor: '#A61000',
        borderRadius: 10,
    },
    item: {
        padding: 10,
        fontSize: 15,
        marginBottom: 2,
    },
    columnRow: {
        flex: 1,
        textAlign: "left",
        justifyContent: "space-evenly",
        marginTop: 5,
    },
});

export default Records;
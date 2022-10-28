import { useQuery, gql } from '@apollo/client';
import { FlatList, StyleSheet, Text, View, Item, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import { GET_COURSES } from '../gql/queries';

function Courses() {
    const { loading, error, data } = useQuery(GET_COURSES, {
        variables: {
            id: "string"
        },
    });

    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        if (data) {
            setMaterias(data.getMaterias);
        }

    }, [data]);

    const coursesItem = ({ materia }) => {
        const { materiaId, nombre } = materia;

        return (
            <Pressable style={styles.item} onPress={() => { setModalVisible(true); setCode(code); }}>
                <Text style={styles.header}>{nombre}</Text>
            </Pressable>
        );
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {materias.map((val) => {
                        return (
                            <View style={styles.item}>
                                
                                <Text> 
                                    <Text style={styles.columnRow}> Nombre: {val.nombre} </Text>
                                    <Text style={styles.columnRow}>{'              '}</Text>
                                    <Text style={styles.columnRow}> Tipologia: {val.tipologia} </Text>
                                    <Text style={styles.columnRow}>{'                 '}</Text>
                                    <Text style={styles.columnRow}> Creditos: {val.creditos} </Text>
                                    <Text>{'                      '}</Text>
                                    Nota: {val.nota}
                                </Text>
                                <ItemDivider></ItemDivider>
                            </View>

                        );
                    })}

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
        flex: 1,
        textAlign: "center",
        justifyContentnt: "space-evenly",
        marginTop: 2,
      },
});
//export default Courses({id: "string"});
export default Courses;



/*
return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {records.map((val) => {
                        return (
                            <View style={styles.item}>
                                <Text> Id: {val.userId} 
                                <Text>{'          '}</Text>
                                Avance: {val.avance}</Text>
                                <ItemDivider></ItemDivider>
                            </View>
                        
                        );
                    })}
                    
                </View>
            </ScrollView>
        </View>

    );
<View>
            {records.map((val) => {
                return <Text> {val.materiaId} {val.nombre}</Text>;
            })}
        </View>
*/
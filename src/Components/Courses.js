import { useQuery, gql } from '@apollo/client';
import { FlatList, StyleSheet, Text, View, Item, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";

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
                                    Nombre: {val.nombre}
                                    <Text>{'              '}</Text>
                                    Tipologia: {val.tipologia}
                                    <Text>{'              '}</Text>
                                    Creditos: {val.creditos}
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
                backgroundColor: "#492A55",
            }}
        />
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#A61414',
        borderRadius: 10,
        textAlign:'center'
    },
    item: {
        padding: 5,
        fontSize: 15,
        marginBottom: 3,
    }
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
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { getAllAcademic, GETRECORD } from '../GraphQL/Queries.js';


function Records() {
    const { error, loading, data } = useQuery(getAllAcademic);
    const id = "string";
    /*
    const {error2, loading2, data2} = useQuery(GETCOURSES, {
        variables: { id: id }
    });
    */
    const [records, setRecords] = useState([]);
    const hpta = { ...data };
    useEffect(() => {
        if (data) {
            //console.log(data.getAllAcademic);
            setRecords(data.getAllAcademic);
        }

    }, [data]);

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {records.map((val) => {
                        return (
                            <View style={styles.item}>
                                <Text> Semestre: {val.semestre} 
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
    },
    item: {
        padding: 10,
        fontSize: 15,
        marginBottom: 2,
    }
});

export default Records;
import React from 'react'
import { searchAllSubjects } from './gql/Query';
import { useQuery } from "@apollo/client";
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList} from 'react-native'



export default function HomePage() {

    const { data, loading } = useQuery(searchAllSubjects);

    console.log(data)

    const SubjectItem = ({ subject }) => {
        const { nombre } = subject; //get the name of subject
    
        return (
          <View>
            <Text>{nombre}</Text>
          </View>
        );
      };

    if (loading) {
        return <Text>Fetching data...</Text> //while loading return this
      }  

    return (
        <FlatList
          data={data.searchAllSubjects}
          renderItem={({ item }) => <SubjectItem subject={item} />}
          keyExtractor={(item, index) => index}
        />
    );
}

  
    

  


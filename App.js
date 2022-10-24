import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import Records from './src/Components/Records.js';
import Courses from './src/Components/Courses'

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link  = from([
  errorLink,
  new HttpLink({uri: "http://192.168.0.7:5000/graphql"}),
]);

// Initialize Apollo Client
const client = new ApolloClient({
  //uri: 'https://countries.trevorblades.com/graphql',
  //uri: 'http://localhost:5000/graphiql',
  link: link,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
      <Text style={styles.title}>Historial Academico</Text>
      <Text style={styles.item}>Materias</Text>
      < Courses />
      <Text style={styles.item}>Estadisticas</Text>
      < Records />
    </View>
    </ApolloProvider>
  );
}
/*
export default function App() {
  return (
    <ApolloProvider client={client}>
    <View style={styles.container}>
      <Text style={styles.title}>HPta</Text>
      <Home/> 
    </View>
    </ApolloProvider>
  );
}*/

export const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingLeft:20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    fontWeight: 'bold',
    fontSize: 18,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25
  },
  modalView: { 
    width:'90%',
    height:'50%',
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom:10
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
    backgroundColor: "lightgrey"
  },
});
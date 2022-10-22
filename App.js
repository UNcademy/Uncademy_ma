import { View, Text, StyleSheet } from 'react-native'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import HomePage from './src/HomePage'


const client = new ApolloClient({
  uri: 'http://192.168.0.7:5000/graphql',  //Recordar que esto debe cambiar!!!!!!!!!!!!
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>App.js</Text>
        <HomePage/> 
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import Search from "./src/screens/Search";
import { onError } from "@apollo/client/link/error";
import Records from './src/Components/Records.js';
import Courses from './src/Components/Courses'


const client = new ApolloClient({
  uri: 'http://192.168.0.7:5000/graphql',  //Recordar que esto debe cambiar!!!!!!!!!!!!
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();


const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name = "HomePage" component={HomePage} options={{headerShown:false}}/>
          <Stack.Screen name = "Profile" component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name = "EditProfile" component={EditProfile} options={{headerShown:false}}/>
          <Stack.Screen name = "Search" component={Search} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

/*
<View style={styles.container}>
  <Text style={styles.title}>Historial Academico</Text>
  <Text style={styles.item}>Materias</Text>
  < Courses />
  <Text style={styles.item}>Estadisticas</Text>
  < Records />
</View>*/

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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
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
  item_list: {
    margin: 30,
    borderBottomWidth: 5,
    borderBottomColor: "lightgrey"
  },
});

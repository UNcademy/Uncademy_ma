import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';

const client = new ApolloClient({
  uri: 'http://192.168.0.4:5000/graphql',  //Recordar que esto debe cambiar!!!!!!!!!!!!
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name = "HomePage" component={HomePage} options={{headerShown:false}}/>
          <Stack.Screen name = "Profile" component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name = "EditProfile" component={EditProfile} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

/*  */

import React from 'react';
import { StyleSheet, Dimensions, Text, Image} from 'react-native';
import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <Text style={styles.title}>¡Bienvenido a UNcademy</Text>
        <Image source={require('../assets/logo.png')} style={styles.image}/>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor:'#A9C2D9',
    justifyContent:'center'
  },
  image: {
    width:150,
    height:165,
    margin:10,
    padding:10
  },
  title:{
    color:"red",
    fontSize:25,
    fontWeight:'bold'
},
});

export default Home;

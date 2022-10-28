import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import Courses from '../components/Courses'
import Records from '../components/Records'

const AcadRec = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Historial Academico</Text>
        <Text style={styles.item}>Materias</Text>
            < Courses />
        <Text style={styles.item}>Estadisticas</Text>
        < Records />
    </View>
  )
}

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
    backgroundColor: "lightgrey",
    flex: 1,
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
export default AcadRec

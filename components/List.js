import React, {useState} from "react";
import { Text, View, FlatList, SafeAreaView, Pressable, StyleSheet } from "react-native";
import ModalSubject from "./ModalSubject";
import { searchSubjectByCode } from "../gql/queries";
import { useQuery } from "@apollo/client";


// definition of the Item, which will be rendered in the FlatList
const Item = ({ nombre, descripcion, codigoMateria }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.details}>{codigoMateria}</Text>
      <Text style={styles.details}>{descripcion}</Text>
  </View>
);


// the filter
const List = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [codigoMateria, setcodigoMateria] = useState("2015734");

  const {data, loading} =  useQuery(searchSubjectByCode, {
    variables: {
        courseCode: codigoMateria
    },
    });

    if(loading){
      return(
        <Text>
          Cargando...
        </Text>
      )
    }

  const RenderItem = ({ item }) => {
    // when no input, show all
    if (!props.searchPhrase) {
      return(
        <Pressable style={styles.item_list} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
          <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>
        </Pressable>
      ) 
    }
    else{
      if(item.nombre.toUpperCase().includes(props.searchPhrase.toUpperCase())){
        return(
          <Pressable style={styles.item_list} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
            <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>
          </Pressable>
        )
      }
      if (item.descripcion.toUpperCase().includes(props.searchPhrase.toUpperCase())) {
        return(
          <Pressable style={styles.item_list} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
            <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>
          </Pressable>
        ) 
      }
      else{
        return(
          null
        )
      }
    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <View onStartShouldSetResponder={() => {props.setClicked(false);}}>
        <FlatList
          data={props.data.searchAllSubjects}
          renderItem={({ item }) => <RenderItem item ={item} />}
          keyExtractor={(item, index) => index}
        />
        <ModalSubject data={data} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
   container: {
    paddingTop:50,
    paddingLeft:20,
    paddingRight: 20,
    backgroundColor: "#A9C2D9",
    borderRadius: 10,
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
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

export default List;

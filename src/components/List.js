import {React, useState} from "react";
import { Text, View, FlatList, SafeAreaView, Pressable } from "react-native";
import ModalSubject from "./ModalSubject";
import { styles } from "../../App"
import { searchSubjectByCode } from "../gql/Query";
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
    if (props.searchPhrase === "") {
      return(
      <Pressable style={styles.item} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
        <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>
      </Pressable>
      ) 
    }
    // filter of the name
    if (item.nombre.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return(
        <Pressable style={styles.item} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
          <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>
        </Pressable>
      ) 
    }
    // filter of the description
    if (item.descripcion.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return(
        <Pressable style={styles.item} onPress={() => {setModalVisible(true); setcodigoMateria(item.codigoMateria)}}>
          <Item nombre={item.nombre} descripcion={item.descripcion} codigoMateria={item.codigoMateria}/>;
        </Pressable>
      ) 
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

export default List;

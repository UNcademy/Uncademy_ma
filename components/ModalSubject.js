import { Text, FlatList, Pressable, Modal, View, StyleSheet} from "react-native";

const SubjectDetails = ({ subject }) => {
    const { nombre, descripcion, codigoMateria, creditos, cupos, tipologia, prerequisitos } = subject;
    return (
      <Pressable style={styles.item}>
        <Text style={styles.title}>{nombre}</Text>
        <Text>descripcion: {descripcion}</Text>
        <Text>codigoMateria: {codigoMateria}</Text>
        <Text>creditos: {creditos}</Text>
        <Text>cupos: {cupos}</Text>
        <Text>tipologia: {tipologia}</Text>
        <Text>prerequisitos: {prerequisitos}</Text>
      </Pressable>
    );
  };

  const ModalSubject= (props)=> {

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <FlatList
              data={props.data.searchSubjectByCode}
              renderItem={({ item }) => <SubjectDetails subject={item} />}
              keyExtractor={(item, index) => index}
            />
            <Pressable style={styles.button} onPress={() => props.setModalVisible(!props.modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
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
});

export default ModalSubject
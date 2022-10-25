import { Text, FlatList, Pressable, Modal, View} from "react-native";
import { styles } from "../../App"

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

export default ModalSubject
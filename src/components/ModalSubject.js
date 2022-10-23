import { Text, FlatList, Pressable, Modal, View} from "react-native";
import { styles } from "../../App"
import { searchSubjectByCode } from "../gql/Query";
import { useQuery } from "@apollo/client";


const SubjectDetails = ({ subject }) => {

    //const { nombre, descripcion, codigoMateria, creditos, cupos, tipologia, prerequisitos } = subject;
    return (
      <Pressable style={styles.item}>
        <Text style={styles.header}>{subject}</Text>
      </Pressable>
    );
  };

  const ModalSubject= (props)=> {

    const code = props.data.toString()
    console.log("este es el code " +  code)

    const {subject} = useQuery(searchSubjectByCode, {
      variables: {
          courseCode: code
      },
      });

      console.log("este es el subject " +  subject)

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
              data={subject}
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
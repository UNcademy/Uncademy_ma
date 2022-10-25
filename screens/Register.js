import React, {useState} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { useMutation} from "@apollo/client";
import { register } from "../gql/queries";

const { width, height } = Dimensions.get("screen");

export default function Register (props){
  const [user_name, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user_type, setUserType] = useState("")
  const [full_name, setFullName] = useState("")
  const [document, setDocument] = useState("")
  const [dep_document, setDepDocument] = useState("")
  const [city_document, setCityDocument] = useState("")
  const [genre, setGenre] = useState("")
  const [email, setEmail] = useState("")
  const [un_mail, setUNMail] = useState("")
  const [birth_place, setBirthPlace] = useState("")
  const [cel, setCel] = useState("")
  const [age, setAge] = useState("")
  const [country, setCountry] = useState("")
  const [blood_type, setBloodType] = useState("")
  const [address, setAddress] = useState("")
  const [army_card, setArmyCard] = useState(false)
  const [program, setProgram] = useState("")
  const { navigation } = props;

  /*{mirar errores}*/
  const [runMutation, {data, loading, error}] = useMutation(register, {
    variables: {
      "user_name": user_name, 
      "password": password,
      "user_type": user_type,
      "full_name": full_name,
      "document": document,
      "dep_document": dep_document,
      "city_document": city_document,
      "genre": genre,
      "email": email,
      "un_mail": un_mail,
      "birth_place": birth_place,
      "cel": cel,
      "age": age,
      "country": country,
      "blood_type": blood_type,
      "address": address,
      "army_card": army_card,
      "program": program
    },
    enabled:false,
    onCompleted:(data) => {
      if (data.register.statusCode == 201){
        navigation.navigate("Home")
      }else{
        console.log(data.register.statusCode)
      }
    }
  }) 
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={18}>
                    Regístrate en UNcademy
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <ScrollView>
                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Nombre de usuario (correo UNAL)"
                        onChangeText={newUsername => setUsername(newUsername)}
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Contraseña"
                        onChangeText={newPassword => setPassword(newPassword)}
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="¿Eres Estudiante, profesor o ambos?"
                        onChangeText={newUserType => setUserType(newUserType)}
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Nombre Completo "
                        onChangeText={newFullName => setFullName(newFullName)}
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Número de Documento "
                        onChangeText={newDocument => setDocument(newDocument)}
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Departamento de expedición del documento"
                        onChangeText={newDepDocument => setDepDocument(newDepDocument)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Ciudad de expedición del documento "
                        onChangeText={newCityDocument => setCityDocument(newCityDocument)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Género"
                        onChangeText={newGenre => setGenre(newGenre)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Correo"
                        onChangeText={newEmail => setEmail(newEmail)}
                        iconContent={
                          <Icon/>
                        }

                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Correo UNAL"
                        onChangeText={newUNMail=> setUNMail(newUNMail)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Lugar de nacimiento"
                        onChangeText={newBirthPlace => setBirthPlace(newBirthPlace)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Celular"
                        onChangeText={newCel => setCel(newCel)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Edad"
                        onChangeText={newAge => setAge(newAge)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="País de nacimiento"
                        onChangeText={newCountry => setCountry(newCountry)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Tipo de sangre y factor RH"
                        onChangeText={newBloodType => setBloodType(newBloodType)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Dirección"
                        onChangeText={newAddress => setAddress(newAddress)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Programa académico"
                        onChangeText={newProgram => setProgram(newProgram)}
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        onChange={newArmyCard => setArmyCard(newArmyCard)}
                        color={argonTheme.COLORS.PRIMARY}
                        label="¿Tienes tarjeta militar?"
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => {
                        console.log(user_name)
                        runMutation()
                      }}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREAR CUENTA
                        </Text>
                      </Button>
                    </Block>
                    </ScrollView>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
      
    );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 5
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});


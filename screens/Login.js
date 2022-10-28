import React, {useState} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView, 
  Alert
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";


import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { useLazyQuery} from "@apollo/client";
import { login } from "../gql/queries";

const { width, height } = Dimensions.get("screen");


export default function Login (props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const { navigation } = props;

    /*{mirar errores}*/
    const [runQuery, {data, loading, error}] = useLazyQuery(login, {
      variables: {
        username: username, 
        password: password
      },
      enabled:false,
      onCompleted:(data) => {
        if (data.login.statusCode == 200){
          storeData(data.login.data.accessToken)
          navigation.navigate("Home")
        }       
                  
      }
    }) 

    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        console.log(jsonValue)
        console.log(jwt_decode(jsonValue));
      } catch (e) {
        console.log(e)
        // saving error
      }
    }
    
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
                <Block flex={0.4} middle>
                  <Text color="#8898AA" size={23}>
                    ¡Bienvenido a UNcademy!
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Usuario UNAL"
                        onChangeText={newUsername => setUsername(newUsername)}
                        iconContent={
                          <Icon
                            size={17}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
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
                          <Icon
                            size={17}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => {
                        runQuery()
                        
                      }}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          INICIAR SESIÓN
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
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
    borderRadius: 10,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 2,
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
    marginRight: 12
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});


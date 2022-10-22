import React from "react";
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
import { useState } from "react";

const { width, height } = Dimensions.get("screen");

export default function Register (props){
  const [checked, setChecked] = useState(false)
  const { navigation } = props;
    
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
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Nombre Completo "
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Número de Documento "
                        iconContent={
                          <Icon/>
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Departamento de expedición del documento"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Ciudad de expedición del documento "
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Género"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Correo"iconContent={
                          <Icon/>
                        }

                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Correo UNAL"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Lugar de nacimiento"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Celular"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Teléfono"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Edad"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="País de nacimiento"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Tipo de sangre y factor RH"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Dirección"
                        iconContent={
                          <Icon/>
                        }
                        
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 2 }}>
                      <Input
                        borderless
                        placeholder="Programa académico"
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
                        onChange={newChecked => setChecked(newChecked)}
                        color={argonTheme.COLORS.PRIMARY}
                        label="¿Tienes tarjeta militar?"
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => navigation.navigate("Login")}>
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


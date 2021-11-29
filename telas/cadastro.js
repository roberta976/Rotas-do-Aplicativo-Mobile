
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Avatar, Input, Button } from 'react-native-elements';
// import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import {
  Image,
  NativeBaseProvider,
  Box,
  Text,
  Input,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
const style = StyleSheet.create({
  Imagem: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {

    display: 'flex',
    justifyContent: 'center'
  },
  button: {

    backgroundColor: '#0A58ED',
    height: '45px',
    fontSize: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    fontFamily: Poppins_600SemiBold
  },
  buttonCadastro: {

    backgroundColor: '#fff',
    height: '45px',
    fontSize: '20px',
    marginTop: '30px',
    border: '1px solid #0A58ED',
    borderRadius: '10px',
    fontFamily: "Poppins_600SemiBold"
  },
  body: {

    paddingHorizontal: '30px',
    paddingTop: '40px',
    margin: '0',
    width: '100%',
    backgroundColor: '#fff',
    fontFamily: Poppins_600SemiBold

  },
  input: {
    backgroundColor: '#E8EFFF',
    borderStyle: 'none',
    borderRadius: '10px',
    height: '45px',
    paddingLeft: '15px',
    color: '#414142',
    fontSize: '16px',
    fontFamily: "Poppins_400Regular"
  },
  textoPrincipal: {

    color: '#050505',
    fontSize: '50px',
    fontWeight: 600,
  }



});



export default function Cadastro({ route, navigation }) {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPWtlTB70o1Ut1__yPEzoiATm5Pdw8Yz0",
    authDomain: "aplicativo-mobile-51396.firebaseapp.com",
    projectId: "aplicativo-mobile-51396",
    storageBucket: "aplicativo-mobile-51396.appspot.com",
    messagingSenderId: "962887189725",
    appId: "1:962887189725:web:36bf292a765fb6630d8734",
    measurementId: "G-1NJ91L9MN8"
  };
  const [getNome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [erro, setErro] = useState("");
  function retornarErro() {
    return "kjk";
  }
  // const [getId, setId] = React.useState();
  // const [getBotao, setBotao] = React.useState();


  function registrarUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("erro:", errorMessage);
        setErro(errorMessage);
      });
  }


  return (
    <NativeBaseProvider >
      <Header
        leftComponent={<Button
          title="<"
          onPress={() => navigation.navigate('Login')}
        ></Button>}
        centerComponent={{ text: 'Usuário', style: { color: '#fff' } }}

      />
      <Box safeArea flex={1} style={style.body}>




        <VStack space={3} mt="5">
          {/* <FormControl>
            <FormControl.Label
              _text={{
                fontFamily: Poppins_600SemiBold,
                color: '#4D4D4D',
                fontSize: '18px',
                fontWeight: 600,
              }}>
              Nome
            </FormControl.Label>
            <Input style={style.input} onChangeText={text => setNome(text)}
              value={getNome} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#4D4D4D',
                fontSize: '18px',
                fontWeight: 600,
              }}>
              Cpf
            </FormControl.Label>
            <Input style={style.input} onChangeText={text => setCpf(text)}
              value={getCpf} />
          </FormControl> */}
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#4D4D4D',
                fontSize: '18px',
                fontWeight: 600,
              }}>
              E-mail
            </FormControl.Label>
            <Input style={style.input} onChangeText={email => setEmail(email)}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label
              _text={{
                color: '#4D4D4D',
                fontSize: '18px',
                fontWeight: 600,
              }}>
              Senha
            </FormControl.Label>
            <Input style={style.input} type="password" onChangeText={senha => setSenha(senha)} />

          </FormControl>

          <Button onPress={() => registrarUser()} style={style.buttonCadastro} mt="2" colorScheme="indigo" _text={{ color: '#4B77CC' }}>
            Salvar
          </Button>





        </VStack>
      </Box>
    </NativeBaseProvider>
  );

}



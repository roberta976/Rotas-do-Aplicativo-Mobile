
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold
} from "@expo-google-fonts/dev";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";


import {
    Image,
    NativeBaseProvider,
    Box,
    Text,
    Input,
    Icon,
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
        justifyContent: 'center',
        marginBottom: '45px'
    },
    button: {

        backgroundColor: '#0A58ED',
        height: '45px',
        fontSize: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        fontFamily: "Poppins_600SemiBold"
    },
    buttonCadastro: {

        backgroundColor: '#fff',
        height: '45px',
        fontSize: '20px',
        marginTop: 'px',
        border: '1px solid #0A58ED',
        borderRadius: '10px',
        fontFamily: "Poppins_600SemiBold"
    },
    body: {

        paddingHorizontal: '30px',
        paddingTop: '40px',
        margin: '0',
        width: '100%',
        backgroundColor: '#fff'

    },
    input: {
        backgroundColor: '#E8EFFF',
        borderStyle: 'none',
        borderRadius: '10px',
        height: '45px',
        paddingLeft: '15px',
        color: '#414142',
        fontSize: '16px'
    },
    textoPrincipal: {

        color: '#050505',
        fontSize: '50px',
        fontWeight: 600,
    }



});

export default function Login({ route, navigation }) {
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
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const [email, setEmail] = React.useState();
    const [senha, setSenha] = React.useState();
    const [erro, setErro] = React.useState();

    function conectarUser() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Logado")
                navigation.navigate("TelaUser")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro(errorMessage);
                console.log("Erro:", errorMessage);
            });

    }



    return (
        <NativeBaseProvider >
            <Box safeArea flex={1} style={style.body}>
                <Heading style={style.container} size="lg" fontWeight="600" color="coolGray.800">
                    <Image

                        style={style.Imagem}
                        size={150}
                        resizeMode={"contain"}
                        borderRadius={100}
                        source={require('../icones/Vector (3).svg')}
                        alt="Icone de usuario"
                    />
                </Heading>
                {/* <Text style={style.textoPrincipal}>Login</Text> */}


                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                color: '#4D4D4D',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                            Login
                        </FormControl.Label>
                        <Input style={style.input} value={email}
                            onChangeText={email => setEmail(email)} />
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
                        <Input style={style.input} type="password" value={senha}
                            onChangeText={senha => setSenha(senha)} />

                    </FormControl>
                    <Link
                        _text={{ fontSize: '12px', fontWeight: '500', color: '#799ED6' }}
                        alignSelf="flex-end"
                        mt="1">
                        Esqueceu a senha?
                    </Link>
                    <Button onPress={() => { conectarUser() }} style={style.button} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                        Login
                    </Button>
                    <Button onPress={() => navigation.navigate('Cadastrar')} style={style.buttonCadastro} mt="2" colorScheme="indigo" _text={{ color: '#4B77CC' }}>
                        Cadastro
                    </Button>



                </VStack>
            </Box>
        </NativeBaseProvider>
    );

}


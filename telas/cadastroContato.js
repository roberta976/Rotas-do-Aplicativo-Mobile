import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import { useState } from "react";
import axios from 'axios';
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
    View
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



export default function CadastroContato({ route, navigation }) {
    const [getNome, setNome] = useState("");
    const [getTelefone, setTelefone] = useState("");
    const [getCpf, setCpf] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getErro, setErro] = useState("");

    async function cadastrarContato() {
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf,
            email: getEmail
        })
            .then(function (response) {
                console.log(response);
                navigation.navigate('TelaUser');
            })
            .catch(function (error) {
                setErro(error.message)
                console.log(error);
            });

    }



    return (
        <NativeBaseProvider >
            <Header
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('TelaUser')}
                ></Button>}
                centerComponent={{ text: 'Cadastrar usu??rio', style: { color: '#fff' } }}

            />
            <Box safeArea flex={1} style={style.body}>




                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontFamily: Poppins_600SemiBold,
                                color: '#4D4D4D',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                            Nome
                        </FormControl.Label>
                        <Input style={style.input} onChangeText={text => setNome(text)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                color: '#4D4D4D',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                            E-mail
                        </FormControl.Label>
                        <Input style={style.input} onChangeText={text => setEmail(text)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                color: '#4D4D4D',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                            Telefone
                        </FormControl.Label>
                        <Input style={style.input} onChangeText={text => setTelefone(text)} />
                    </FormControl>



                    <Button style={style.buttonCadastro} onPress={() => cadastrarContato()} mt="2" colorScheme="indigo" _text={{ color: '#4B77CC' }}>
                        Salvar
                    </Button>
                    <text>{getErro}</text>





                </VStack>
            </Box>
        </NativeBaseProvider>
    );

}



import React from 'react';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';

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

        backgroundColor: '#dc2020',
        height: '45px',
        fontSize: '20px',
        marginTop: '0px',
        borderRadius: '10px',
        fontFamily: Poppins_600SemiBold
    },
    buttonCadastro: {

        backgroundColor: '#0A58ED',
        height: '45px',
        fontSize: '20px',
        marginTop: '50px',
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



export default function EditContato({ route, navigation }) {
    const [getNome, setNome] = useState();
    const [getCpf, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getId, setId] = useState();
    //     const [getAlterar,setAlterar] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params
            const { telefone } = route.params
            const { email } = route.params
            const { id } = route.params
            //             const { alterar } =  route.params

            setNome(nome)
            setTelefone(telefone)
            setEmail(email)
            setId(id)
            //             setAlterar(alterar)
        }

    }, [])
    function alterarDados() {
        axios.put('http://professornilson.com/testeservico/clientes/' + getId, {
            nome: getNome,
            telefone: getTelefone,
            email: getEmail
        })
            .then(function (response) {
                setNome('');
                setEmail('');
                setTelefone('');
                showMessage({
                    message: "Registro Alterado com sucesso",
                    type: "success",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function excluirDados() {


        Alert.alert(
            "Atenção",
            "Deseja excluir o registro?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => (
                        axios.delete('http://professornilson.com/testeservico/clientes/' + getId)
                            .then(function (response) {
                                setNome('');
                                setEmail('');
                                setTelefone('');
                                showMessage({
                                    message: "Registro Excluido com sucesso",
                                    type: "danger",
                                });
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    )
                }
            ],
            { cancelable: false }
        );



    }


    return (
        <NativeBaseProvider >
            <Header
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('TelaUser')}
                ></Button>}
                centerComponent={{ text: 'Editar/Deletar usuário', style: { color: '#fff' } }}

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
                            E-mail
                        </FormControl.Label>
                        <Input style={style.input} onChangeText={text => setEmail(text)}
                            value={getEmail} />
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
                        <Input style={style.input} onChangeText={text => setTelefone(text)}
                            value={getTelefone} />
                    </FormControl>



                    <Button style={style.buttonCadastro} mt="2" colorScheme="indigo" _text={{ color: '#fff' }} onPress={() => alterarDados()}
                    >
                        Salvar
                    </Button>
                    <Button style={style.button} mt="2" colorScheme="indigo" _text={{ color: '#fff' }} onPress={() => excluirDados()}>
                        Excluir
                    </Button>




                </VStack>
            </Box>
        </NativeBaseProvider>
    );

}



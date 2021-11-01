import React from 'react';
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



    return (
        <NativeBaseProvider >
            <Header
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('TelaUser')}
                ></Button>}
                centerComponent={{ text: 'Cadastrar usuário', style: { color: '#fff' } }}

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
                        <Input style={style.input} />
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
                        <Input style={style.input} />
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
                        <Input style={style.input} />
                    </FormControl>



                    <Button style={style.buttonCadastro} mt="2" colorScheme="indigo" _text={{ color: '#4B77CC' }}>
                        Salvar
                    </Button>





                </VStack>
            </Box>
        </NativeBaseProvider>
    );

}



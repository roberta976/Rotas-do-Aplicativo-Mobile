import { ListItem, Avatar } from 'react-native-elements';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    View,
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

        backgroundColor: '#2A3538',
        height: '50px',
        fontSize: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        fontFamily: "Poppins_600SemiBold"
    },
    buttonCadastro: {

        backgroundColor: '#2089dc',
        height: '50px',
        fontSize: '20px',
        marginTop: '40px',
        borderRadius: '10px',
        fontFamily: "Poppins_600SemiBold"
    },
    HeaderStyle: {
        backgroundColor: '#262DD3'
    },
    body: {

        paddingHorizontal: '',
        paddingTop: '20px',
        margin: '0',
        width: '100%',
        backgroundColor: '#fff'

    },
    input: {
        backgroundColor: '#EFEFEF',
        borderStyle: 'none',
        borderRadius: '10px',
        height: '45px',
        paddingLeft: '15px',
        color: '#414142',
        fontSize: '16px'
    },
    buttonAdd: {
        backgroundColor: '#2089dc',
        borderRadius: '65px',
        bottom: '14px',
        boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
        color: '#fff',
        cursor: 'pointer',
        height: '50px',
        position: 'fixed',
        right: '22px',
        width: '50px',
        zIndex: '3000',
        border: 'none'
    },
    textoPrincipal: {

        color: '#050505',
        fontSize: '50px',
        fontWeight: 600,
    }



});
export default function TelaUser({route,navigation}) {
    
 
    const list = [
        {
            name: 'Aline Andrade',
            telefone: '81 988553424',
            avatar_url: 'https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo='
        },
        {
            name: 'Chris Jackson',
            telefone: '81 998759420',
            avatar_url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Lucas Feitosa',
            telefone: '81 983426789',
            avatar_url: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Clara Mattos',
            telefone: '81 987408989',
            avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }

    ]

    
        return (


        <NativeBaseProvider >
            <Header
                centerComponent={{ text: 'Lista de Usuários', style: { color: '#fff' } }}

            />
            <Box safeArea flex={1} style={style.body}>

                <View>
                    {
                        list.map((l, i) => (
                            
                            <ListItem key={i} bottomDivider onPress={()=>navigation.navigate('CrudContato')} >
                                <Avatar rounded
                                   source={{uri: l.avatar_url}} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                                </ListItem.Content>
                                
                            </ListItem>
                        ))
                    }




                </View>
                <Button onPress={()=> navigation.navigate('CadastrarContato')} style={style.buttonAdd} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                    <Icon
                        name='plus'
                        color="#fff"
                        fontSize='30px'
                    />

                </Button>
            </Box>
        </NativeBaseProvider>

    );
}






import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// import Cadastro from './cadastro';
import Login from '../PrimeiroProjeto1/login';
// import Login2 from './login2';
import Cadastro from './cadastro';
import TelaUser from './telaUser';
import CadastroContato from './cadastroContato';
import EditContato from './editContato';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="CadastrarContato" component={CadastroContato} options={{ headerShown: false }}/>
        <Stack.Screen name="TelaUser" component={TelaUser} options={{ headerShown: false }}/>
        <Stack.Screen name="CrudContato" component={EditContato} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastrar" component={Cadastro} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  
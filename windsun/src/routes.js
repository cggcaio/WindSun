import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'react-native';


import Login from './Pages/Login';
import Mapa from './Pages/Mapa';


const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer> 
            <StatusBar barStyle="light-content" backgroundColor= "skyblue"/>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name="Mapa" component={Mapa} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};



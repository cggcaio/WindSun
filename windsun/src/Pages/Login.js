import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

//import { Button } from '../components/Button';

function Login({navigation}) {
    return (
        <View style={styles.container}>
           
            <Image style={styles.imagem} 
                source = {require('../imagens/logo.png')}/>

                <TextInput style={styles.textLogin}
                placeholder="Digite o usuário"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                />

        <TouchableOpacity style={{   widht: 10, margin: 10, borderRadius: 25,     padding: 10, backgroundColor: "red" }}>
            <Text style={{fontSize: 50, }}>Press Here</Text>
        </TouchableOpacity>

        </View>
       
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    imagem:{
        width: 400,
        height: 400,
    },


    textLogin:{
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 25, 
        paddingHorizontal: 50, 
        fontSize: 16,
        elevation: 20, //sombra 
        marginTop: 20,
        
    },



    bottom:{
        marginVertical: 20,
        height: 120,
        width: 260,
        
    },

})

  export default Login;


  

//   <Button
//                     title="Login"
//                     onPress={() => navigation.navigate('Mapa')}
//   color = {"steelblue"}
//                 />
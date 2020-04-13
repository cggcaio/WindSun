import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import  MapView,  { PROVIDER_GOOGLE, Marker, Callout }   from 'react-native-maps';
import { TextInput } from 'react-native-gesture-handler';

const largura = Dimensions.get("screen").width; //garantindo responsividade na largura das telas
const altura = Dimensions.get("screen").height;

function Mapa({navigation}) {
    return (
    <>
    <View style={styles.pagina}>

       <Text style={styles.title}> Selecione a estação </Text>
       


        <View style={styles.container}> 
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                latitude: -19.988388,
                longitude: -40.579572,
                latitudeDelta: 2.5922,
                longitudeDelta: 2.5921,  }}>

                <Marker coordinate={{latitude: -20.271094, longitude: -40.306069 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: Vitória </Text>
                            <Text style={styles.info}> Temperatura: 29.3 °C </Text>
                            <Text style={styles.info}> Umidade: 35%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker>

                <Marker coordinate={{latitude: -19.988388, longitude: -40.579572 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: Sta. Teresa </Text>
                            <Text style={styles.info}> Temperatura: 35.3 °C </Text>
                            <Text style={styles.info}> Umidade: 40%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker>

                <Marker coordinate={{latitude: -19.356923, longitude: -40.068680 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: Linhares </Text>
                            <Text style={styles.info}> Temperatura: 38.3 °C </Text>
                            <Text style={styles.info}> Umidade: 53%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker>                

                <Marker coordinate={{latitude: -20.636526, longitude: -40.741818 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: Alf. Chaves </Text>
                            <Text style={styles.info}> Temperatura: 27.3 °C </Text>
                            <Text style={styles.info}> Umidade: 58%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker> 

                <Marker coordinate={{latitude: -18.676198, longitude: -39.86051 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: São Mateus </Text>
                            <Text style={styles.info}> Temperatura: 29.0 °C </Text>
                            <Text style={styles.info}> Umidade: 46%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker> 

                <Marker coordinate={{latitude: -20.750412, longitude: -41.488852 }}>
                    <Callout> 
                        <View style={styles.callout}> 
                            <Text style={styles.nomeestacao}> Estação: Alegre </Text>
                            <Text style={styles.info}> Temperatura: 32.0 °C </Text>
                            <Text style={styles.info}> Umidade: 56%  </Text>                       
                        </View>    
                    </Callout> 
                </Marker> 

            </MapView> 
        </View>



        <View style={styles.bottom_proximo}> 
                <Button
                    title="Próximo"
                    color = "steelblue"
                    //onPress={() => navigation.navigate('Mapa')}
                />
        </View>

    </View>        
    </>
    );
  }

  const styles = StyleSheet.create({
    pagina:{
        flex:1,
        backgroundColor: '#87CEEB',
        alignItems: 'center',

    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20,
        marginVertical: 10,
        //position: 'absolute'
       
    },

    searchEstado:{
        
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 25, 
        paddingHorizontal: 50, 
        fontSize: 16,
        elevation: 20, //sombra 
        marginTop: 20,
        
    },

    container: {
      
      height: 500,
      width: largura,
      //marginVertical: 100,
      //justifyContent: 'flex-end',
      //alignItems: 'center',
      flex: 1,
            
    },

    map: {
        ...StyleSheet.absoluteFillObject,
      },


    bottom_proximo:{
        
        height: 120,
        width: 260,
        marginTop: altura -200,
        position: 'absolute',
    },

    callout:{
        width: 130,
    },

    nomeestacao:{
        fontSize: 12,
        fontWeight: 'bold',
        //textAlign: 'center',
    },

    info:{
        fontSize: 10,
        color: "#c4c4c4",
    }


     });

  export default Mapa;
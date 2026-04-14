import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";

export default function Training(){
 const [pool,setPool]=useState("");
 const [laps,setLaps]=useState("");
 const [distance,setDistance]=useState(0);

 function calculate(){
  const result=(parseFloat(pool)||0)*(parseInt(laps)||0);
  setDistance(result);
 }

 return(
  <View style={styles.container}>
   <Text style={styles.title}>Calculadora de Treino</Text>
   <TextInput placeholder="Tamanho da Piscina em metros" value={pool} onChangeText={setPool} style={styles.input}/>
   <TextInput placeholder="Numero de Voltas" value={laps} onChangeText={setLaps} style={styles.input}/>
   <TouchableOpacity onPress={calculate} style={styles.button}><Text>Calcular</Text></TouchableOpacity>
   <Text>Distância: {distance} metros  </Text>
  </View>
 );
}
const styles=StyleSheet.create({container:{flex:1,padding:20},input:{borderWidth:1},button:{backgroundColor:"#0A84FF",padding:10}});
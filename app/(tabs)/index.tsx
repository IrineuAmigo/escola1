import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Página Inicial. </Text>

      <Text>Bem-vindo!</Text>
      <Text style={styles.text}>Aplicativo para treinos de natação</Text>
      <Text style={styles.text}>Use as abas abaixo para organizar seus treinos.</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#fff',
  },

}); 
  

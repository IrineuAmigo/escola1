import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Sobre nós </Text>
          <Text>App de treinos de natação.</Text>
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


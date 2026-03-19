import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{ title: 'Ops! Esta Página não foi encontrada' }} />
    <View style={styles.container}>
      <Link href="/" style={styles.button}>Voltar para a Página Inicial</Link>
      </View>
    </>
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
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
  
}); 
  

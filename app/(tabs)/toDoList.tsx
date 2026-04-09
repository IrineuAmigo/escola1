
import { useTarefas } from '@/hooks/useTarefas';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas(); 
      
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Nadadores</Text> 

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um novo Nadador"        
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaConteiner}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)} >
                        <Text style={styles.removerTexto}>Remover</Text>   
                        </TouchableOpacity>  
                    </View>
                )}
            />    
        </View>
        );
}


const styles = StyleSheet.create({  
    container: {
        flex: 1,
        padding: 20, 
        backgroundColor: '#25292e',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20, 
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
            color: '#fff',
    },
    tarefaConteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#25292e',
        padding: 10,
        marginBottom: 10,
    },
    tarefaTexto: {
        fontSize: 16,
    },
    removerButton: {
        backgroundColor: '#ff4d4d',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    removerTexto: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

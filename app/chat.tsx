import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [sentimentResult, setSentimentResult] = useState<null | {positivity: number; negativity: number}>(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Aquí iría la lógica para consultar la API de HuggingFace y obtener respuesta del bot
    // Por ahora, solo simularemos una respuesta estática
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now()+1).toString(),
        text: "Respuesta del bot (Placeholder)",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const handleEndConversation = () => {
    // Aquí iría la lógica de análisis de sentimiento:
    // Tomar todos los mensajes del usuario, enviarlos a una función que los analice
    // Por ahora, simulamos el resultado
    const mockResult = { positivity: 0.8, negativity: 0.2 };
    setSentimentResult(mockResult);
    setShowResults(true);
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.botMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatArea}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor="#ccc"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.endButton} onPress={handleEndConversation}>
        <Text style={styles.endButtonText}>Finalizar Conversación</Text>
      </TouchableOpacity>

      <Modal
        visible={showResults}
        transparent
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Resultados de Sentimiento</Text>
            {sentimentResult && (
              <>
                <Text style={styles.modalText}>Positividad: {Math.round(sentimentResult.positivity * 100)}%</Text>
                <Text style={styles.modalText}>Negatividad: {Math.round(sentimentResult.negativity * 100)}%</Text>
              </>
            )}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setShowResults(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#00008B', // Azul oscuro para el usuario
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#00008B',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  endButton: {
    backgroundColor: 'red',
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  endButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  modalContent:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:8,
    width:'80%'
  },
  modalTitle:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15
  },
  modalText:{
    fontSize:16,
    marginBottom:10
  },
  closeButton:{
    backgroundColor:'#00008B',
    padding:15,
    borderRadius:8,
    marginTop:10
  },
  closeButtonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  }
});

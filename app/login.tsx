import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types';



  
export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica de login (email/password)
    // Si es exitoso:
    navigation.navigate('Chat');
  };

  const handleFaceRecognition = () => {
    // Placeholder para el reconocimiento facial
    // Después de validación exitosa:
    navigation.navigate('Chat');
  };

  const handleLoginWithGoogle = () => {
    // Placeholder de Login con Gmail
    navigation.navigate('Chat');
  };

  const handleLoginWithFacebook = () => {
    // Placeholder de Login con Facebook
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFaceRecognition}>
        <Text style={styles.buttonText}>Face Recognition</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLoginWithGoogle}>
        <Text style={styles.buttonText}>Login con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLoginWithFacebook}>
        <Text style={styles.buttonText}>Login con Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B', // Fondo azul oscuro
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#00008B',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

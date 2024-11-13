// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginPress = () => {
    if (username === 'madura' && password === 'kelontong') {
      onLogin();
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/236x/31/a2/b2/31a2b2fa8519dd4cde68ed876db42540.jpg' }} style={styles.logo} />
      <Text style={styles.city}>TOKO KELONTONG MADURA</Text>
      <Text style={styles.loginTitle}>Halaman Login</Text>
      
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.inputPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ? "Sembunyikan" : "Tampilkan"}</Text>
        </TouchableOpacity>
      </View>
      
      <Button title="Masuk" onPress={handleLoginPress} color="#28a745" />
      <Text style={styles.footer}> Toko Kelontong Madura</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  city: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#f8f9fa',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  inputPassword: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#f8f9fa',
  },
  showPasswordText: {
    marginLeft: 10,
    color: '#007bff',
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: '#6c757d',
  },
});

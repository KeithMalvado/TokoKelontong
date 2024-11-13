// App.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Login from './Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.content}>
          <Text style={styles.title}>Selamat Datang di Toko Kelontong Madura!</Text>
          <Button title="Keluar" onPress={() => setIsLoggedIn(false)} color="#d9534f" />
        </View>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e9ecef',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>Keranjang Belanja</Text>
      <Button title="Checkout" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

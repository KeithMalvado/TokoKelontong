import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <Text>Checkout</Text>
      <Button title="Bayar Sekarang" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

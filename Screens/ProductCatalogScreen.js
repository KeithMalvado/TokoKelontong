import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Produk A', price: 10000 },
  { id: '2', name: 'Produk B', price: 20000 },
];

export default function ProductCatalogScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>Rp {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  productItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});

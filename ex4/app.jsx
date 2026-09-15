import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

// exercicio 4
export function Exercicio4() {
  return (
    <View style={s4.card}>
      <Text style={s4.h1}>Título</Text>
      <Text style={s4.corpo}>Corpo</Text>
      <Text style={s4.legenda}>Legenda</Text>
    </View>
  );
}

const s4 = StyleSheet.create({
  card: {
    backgroundColor: '#1B2130',
    padding: 16,
  },
  h1: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  corpo: {
    color: '#ccc',
    fontSize: 15,
  },
  legenda: {
    color: '#888',
    fontSize: 12,
  },
});
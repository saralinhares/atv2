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

export function Exercicio2() {
  return (
    <View style={s2.card}>
      <Text style={s2.texto}>Oi</Text>
    </View>
  );
}

const s2 = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#1B2130',
    borderRadius: 12,
  },
  texto: { color: '#fff' },
});
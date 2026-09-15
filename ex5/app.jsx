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

export function Exercicio5() {
  return (
    <View style={s5.container}>
      <Text style={s5.titulo}>Título da seção</Text>
      <Text style={s5.corpo}>
        Texto de apoio com lineHeight confortável, cor secundária e alinhamento à esquerda.
      </Text>
    </View>
  );
}

const s5 = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.4,
  },
  corpo: {
    fontSize: 15,
    lineHeight: 22,
    color: '#97A3B8',
    textAlign: 'left',
  },
});
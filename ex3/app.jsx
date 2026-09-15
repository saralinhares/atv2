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

export function Exercicio3() {
  return (
    <View style={s3.container}>
      <Text style={s3.titulo}>Título</Text>
    </View>
  );
}

const s3 = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E8EDF5',
    marginBottom: 8,
    paddingHorizontal: 16,
    textTransform: 'uppercase',
  },
});
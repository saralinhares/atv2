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
export function Exercicio15() {
  return (
    <SafeAreaView style={s15.tela}>
      <View style={s15.header}>
        <Text style={s15.titulo}>Conversas</Text>
      </View>
      <ScrollView style={s15.conteudo} />
      <View style={s15.footer}>
        <Text style={{ color: '#fff' }}>Nova mensagem</Text>
      </View>
    </SafeAreaView>
  );
}

const s15 = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#12151C',
  },
  header: {
    height: 56,
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
  },
  conteudo: {
    flex: 1,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#323D54',
  },
});
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
export function Exercicio12() {
  return (
    <View style={s12.container}>
      <View style={s12.avatar} />
      <Text style={s12.texto}>flexShrink: 1</Text>
      <Text style={s12.hora}>10:00</Text>
    </View>
  );
}

const s12 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ccc',
  },
  texto: {
    flexShrink: 1,
  },
  hora: {
    width: 50,
  },
});
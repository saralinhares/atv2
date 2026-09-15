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
export function Exercicio14() {
  return (
    <View style={s14.card}>
      <Image style={s14.foto} source={{ uri: 'https://via.placeholder.com/150' }} />
      <View style={s14.selo}>
        <Text style={s14.seloTexto}>NOVO</Text>
      </View>
    </View>
  );
}

const s14 = StyleSheet.create({
  card: {
    position: 'relative',
  },
  foto: {
    width: '100%',
    height: 200,
  },
  selo: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: '#ff0000',
    padding: 4,
  },
  seloTexto: {
    color: '#fff',
    fontSize: 10,
  },
});
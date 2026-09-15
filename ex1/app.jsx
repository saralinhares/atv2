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

// atividade 1
export function Exercicio1() {
  return <View style={s1.card} />;
}

const s1 = StyleSheet.create({
  card: {
    backgroundColor: '#61dafb',
    padding: 16,
    borderRadius: 8,
  },
})
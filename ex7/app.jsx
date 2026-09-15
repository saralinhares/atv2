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

export function Exercicio7() {
  const { width } = useWindowDimensions();
  const colunas = width > 600 ? 3 : 2;

  return (
    <View style={{ width: width / colunas }}>
      <View style={s7.card} />
    </View>
  );
}

const s7 = StyleSheet.create({
  card: {
    width: 120,
    aspectRatio: 16 / 9,
    minHeight: 48,
    maxWidth: 480,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
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

export function Exercicio9() {
  return (
    <View style={s9.linha}>
      <View style={s9.item} />
      <View style={s9.item} />
    </View>
  );
}

const s9 = StyleSheet.create({
  linha: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 50,
    backgroundColor: '#3498db',
  },
});
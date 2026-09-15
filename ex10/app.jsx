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

export function Exercicio10() {
  return (
    <View style={s10.linha}>
      <View style={s10.item} />
      <View style={[s10.item, { alignSelf: 'flex-end' }]} />
      <View style={s10.item} />
    </View>
  );
}

const s10 = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 150,
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: '#3498db',
  },
});
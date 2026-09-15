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

export function Exercicio11() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 2, backgroundColor: '#61DAFB' }} />
      <View style={{ flex: 1, backgroundColor: '#FFB86C' }} />
    </View>
  );
}
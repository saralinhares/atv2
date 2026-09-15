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

export function Exercicio6() {
  return (
    <View style={s6.caixa}>
      <Text>conteúdo</Text>
    </View>
  );
}

const s6 = StyleSheet.create({
  caixa: {
    width: 200,
    padding: 16,
    paddingHorizontal: 24,
    paddingTop: 8,
    margin: 8,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#323D54',
    borderRadius: 12,
    borderBottomWidth: 3,
  },
});
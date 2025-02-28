import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ClasesScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Clases" />
      <Text style={styles.text}>Pantalla de Clases</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ClasesScreen;
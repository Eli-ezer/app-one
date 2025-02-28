import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AsistenciaScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Asistencia" />
      <Text style={styles.text}>Pantalla de Asistencia</Text>
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

export default AsistenciaScreen;
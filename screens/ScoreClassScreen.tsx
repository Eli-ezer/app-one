import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';

const CalificacionesScreen = () => {
  // Datos de ejemplo para las calificaciones por clase
  const calificacionesClases = [
    {
      id: '1',
      nombreClase: 'Matemáticas',
      calificacion: 95,
    },
    {
      id: '2',
      nombreClase: 'Ciencias',
      calificacion: 88,
    },
    {
      id: '3',
      nombreClase: 'Historia',
      calificacion: 92,
    },
  ];

  const renderItem = ({ item }: { item: { id: string; nombreClase: string; calificacion: number } }) => (
    <View style={styles.claseContainer}>
      <Text style={styles.nombreClase}>{item.nombreClase}</Text>
      <Text style={styles.text}>Calificación: {item.calificacion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={calificacionesClases}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  claseContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nombreClase: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default CalificacionesScreen;
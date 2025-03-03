import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';

const AsistenciaScreen = () => {
  // Datos de ejemplo para la asistencia por clase
  const asistenciaClases = [
    {
      id: '1',
      nombreClase: 'Matemáticas',
      totalClases: 40,
      clasesAsistidas: 35,
    },
    {
      id: '2',
      nombreClase: 'Ciencias',
      totalClases: 30,
      clasesAsistidas: 28,
    },
    {
      id: '3',
      nombreClase: 'Historia',
      totalClases: 25,
      clasesAsistidas: 20,
    },
  ];

  const renderItem = ({ item }: { item: { id: string; nombreClase: string; totalClases: number; clasesAsistidas: number; } }) => {
    const porcentajeAsistencia = (item.clasesAsistidas / item.totalClases) * 100;
    return (
      <View style={styles.claseContainer}>
        <Text style={styles.nombreClase}>{item.nombreClase}</Text>
        <Text style={styles.text}>Total de Clases: {item.totalClases}</Text>
        <Text style={styles.text}>Clases Asistidas: {item.clasesAsistidas}</Text>
        <Text style={styles.text}>Porcentaje de Asistencia: {porcentajeAsistencia.toFixed(2)}%</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={asistenciaClases}
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

export default AsistenciaScreen;
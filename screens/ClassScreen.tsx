import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';

const ClasesScreen = () => {
  // Datos de ejemplo para las clases
  const clases = [
    {
      id: '1',
      nombreClase: 'Matemáticas',
      profesor: 'Sr. Pérez',
      horaInicio: '08:00',
      horaFin: '09:30',
    },
    {
      id: '2',
      nombreClase: 'Ciencias',
      profesor: 'Sra. Gómez',
      horaInicio: '10:00',
      horaFin: '11:30',
    },
    {
      id: '3',
      nombreClase: 'Historia',
      profesor: 'Sr. López',
      horaInicio: '12:00',
      horaFin: '13:30',
    },
  ];

  const renderItem = ({ item }: { item: { id: string; nombreClase: string; profesor: string; horaInicio: string; horaFin: string } }) => (
    <View style={styles.claseContainer}>
      <Text style={styles.nombreClase}>{item.nombreClase}</Text>
      <Text style={styles.profesor}>Profesor: {item.profesor}</Text>
      <Text style={styles.horario}>
        {item.horaInicio} - {item.horaFin}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Header title="Clases" /> */}
      <FlatList
        data={clases}
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
  profesor: {
    fontSize: 16,
    marginBottom: 4,
  },
  horario: {
    fontSize: 14,
    color: '#666',
  },
});

export default ClasesScreen;
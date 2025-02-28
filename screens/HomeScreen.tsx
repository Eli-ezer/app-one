import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  // Datos de ejemplo para el panel
  const userInfo = {
    name: 'Juan Pérez',
    grade: '10mo Grado',
    average: '8.5',
    attendance: '95%',
  };

  const announcements = [
    { id: 1, title: 'Reunión de padres', date: '2023-10-15' },
    { id: 2, title: 'Entrega de boletines', date: '2023-10-20' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Bienvenido" />
      <View style={styles.content}>
        <Card title="Información del Estudiante">
          <Text>Nombre: {userInfo.name}</Text>
          <Text>Grado: {userInfo.grade}</Text>
          <Text>Promedio: {userInfo.average}</Text>
          <Text>Asistencia: {userInfo.attendance}</Text>
        </Card>

        <Card title="Anuncios Recientes">
          {announcements.map((announcement) => (
            <View key={announcement.id} style={styles.announcement}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementDate}>{announcement.date}</Text>
            </View>
          ))}
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  announcement: {
    marginBottom: 12,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
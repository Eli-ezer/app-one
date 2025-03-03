import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Profile from '../components/Profile';
const HomeScreen = () => {
  // Datos de ejemplo para el panel
  const userInfo = {
    name: 'Juan Pérez',
    grade: '10mo Grado',
    average: '8.5',
    attendance: '95%',
    email: 'alumno@email.com',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
  };

  const announcements = [
    { id: 1, title: 'Reunión de padres', date: '2023-10-15' },
    { id: 2, title: 'Entrega de boletines', date: '2023-10-20' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
      <Profile userInfo={userInfo} />

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
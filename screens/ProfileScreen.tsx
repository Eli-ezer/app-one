import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const ProfileScreen = () => {
  // Datos de ejemplo para el perfil
  const userProfile = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    grade: '10mo Grado',
    profileImage: 'https://via.placeholder.com/150', // URL de imagen de perfil
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Perfil" />
      <View style={styles.content}>
        <Card title="Información del Perfil">
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: userProfile.profileImage }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>{userProfile.name}</Text>
            <Text style={styles.profileEmail}>{userProfile.email}</Text>
            <Text style={styles.profileGrade}>Grado: {userProfile.grade}</Text>
          </View>
        </Card>

        <Card title="Actividades Recientes">
          <Text style={styles.activityText}>No hay actividades recientes.</Text>
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
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  profileGrade: {
    fontSize: 16,
    color: '#666',
  },
  activityText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProfileScreen;
// src/components/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface UserInfo {
  profileImage?: string;
  name: string;
  grade: string;
  average: string;
  attendance: string;
  email: string;
}

interface ProfileProps {
  userInfo: UserInfo;
}

const Profile: React.FC<ProfileProps> = ({ userInfo }) => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: userInfo.profileImage || 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' }}
        style={styles.profileImage}
      />
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>{userInfo.name}</Text>
        <Text style={styles.profileText}>Grupo: {userInfo.grade}</Text>
        <Text style={styles.profileText}>Asistencia: {userInfo.attendance}</Text>
        <Text style={styles.profileText}>Promedio: {userInfo.average}</Text>
        <Text style={styles.profileText}>Correo: {userInfo.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    profileContainer: {
      flexDirection: 'row', // Alinear imagen y texto en una fila
      alignItems: 'center', // Centrar verticalmente
      marginBottom: 20,
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2, // Sombra en Android
      shadowColor: '#000', // Sombra en iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40, // Hacer la imagen circular
      marginRight: 16, // Espacio entre la imagen y los datos
    },
    profileDetails: {
      flex: 1, // Ocupar el espacio restante
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    profileText: {
      fontSize: 16,
      color: '#666',
      marginBottom: 4,
    },
  });

export default Profile;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  // Datos de ejemplo para el perfil
  const userProfile = {
    name: 'Divy Jani',
    class: '9A Solen...',
    rollNo: '1',
    profileImage: 'https://source.unsplash.com/150x150/?portrait', // URL de imagen de perfil
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: userProfile.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{userProfile.name}</Text>
        <Text style={styles.profileClass}>{userProfile.class}</Text>
        <Text style={styles.profileRollNo}>Roll No.: {userProfile.rollNo}</Text>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileClass: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  profileRollNo: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileScreen;
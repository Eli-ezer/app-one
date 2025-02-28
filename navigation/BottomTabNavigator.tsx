import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AsistenciaScreen from '../screens/AnnouncementsScreen';
import CalificacionesScreen from '../screens/ScoreClassScreen';
import AvisosScreen from '../screens/AttendanceScreen';
import ClasesScreen from '../screens/ClassScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Asistencia') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Calificaciones') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Avisos') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Clases') {
            iconName = focused ? 'book' : 'book-outline';
          } else {
            iconName = 'alert-circle'; // Icono por defecto
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee', // Color del ícono activo
        tabBarInactiveTintColor: '#666', // Color del ícono inactivo
        tabBarStyle: {
          paddingBottom: 5, // Ajuste de padding para el menú inferior
        },
      })}
    >
      <Tab.Screen name="Asistencia" component={AsistenciaScreen} options={{ title: 'Asistencia' }} />
      <Tab.Screen name="Calificaciones" component={CalificacionesScreen} options={{ title: 'Calificaciones' }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Avisos" component={AvisosScreen} options={{ title: 'Avisos' }} />
      <Tab.Screen name="Clases" component={ClasesScreen} options={{ title: 'Clases' }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
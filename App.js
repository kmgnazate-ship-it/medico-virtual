import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { CONSULTAS_INICIALES } from './src/data/sintomasData';
import InicioScreen from './src/screens/InicioScreen';
import GuiaScreen from './src/screens/GuiaScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [consultas, setConsultas] = useState(CONSULTAS_INICIALES);

  const agregarConsulta = (nuevaConsulta) => {
    setConsultas([nuevaConsulta, ...consultas]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0284C7',
          tabBarInactiveTintColor: '#64748B',
          headerStyle: { backgroundColor: '#0284C7' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Médico Virtual',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🏥</Text>,
          }}
        />
        <Tab.Screen
          name="Guía"
          options={{
            title: 'Guía de Síntomas',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📋</Text>,
          }}
        >
          {(props) => <GuiaScreen {...props} consultas={consultas} />}
        </Tab.Screen>
        <Tab.Screen
          name="Consulta"
          options={{
            title: 'Nueva Consulta',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🩺</Text>,
          }}
        >
          {(props) => <ConsultaScreen {...props} onAgregarConsulta={agregarConsulta} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
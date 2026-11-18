import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { SINTOMAS_CATALOGO } from './src/data/sintomasData';
import InicioScreen from './src/screens/InicioScreen';
import GuiaScreen from './src/screens/GuiaScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [consultas, setConsultas] = useState(SINTOMAS_CATALOGO);

  const registrarHistorial = (itemSeleccionado) => {
    const registro = {
      ...itemSeleccionado,
      id: Date.now().toString(),
    };
    setConsultas([registro, ...consultas]);
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
            title: 'Hestia · Salud Virtual',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🏥</Text>,
          }}
        />
        <Tab.Screen
          name="Evaluación"
          options={{
            title: 'Evaluar Síntomas',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🩺</Text>,
          }}
        >
          {(props) => <ConsultaScreen {...props} onRegistrarHistorial={registrarHistorial} />}
        </Tab.Screen>
        <Tab.Screen
          name="Guía"
          options={{
            title: 'Guía e Historial',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📋</Text>,
          }}
        >
          {(props) => <GuiaScreen {...props} consultas={consultas} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
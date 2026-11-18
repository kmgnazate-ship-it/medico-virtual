import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function InicioScreen({ navigation }) {
  // Obtiene la IP de red activa del entorno Expo / dispositivo
  const hostUri = Constants.expoConfig?.hostUri || Constants.manifest2?.extra?.expoGo?.debuggerHost || '';
  const ipDispositivo = hostUri ? hostUri.split(':')[0] : '127.0.0.1 (Local)';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.badge}>Asistente de Salud · Hestia v1.0</Text>
      <Text style={styles.titulo}>Hestia</Text>
      <Text style={styles.subtitulo}>
        Selecciona tus síntomas para recibir orientación rápida en casa o saber cuándo acudir a un médico.
      </Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600' }}
        style={styles.banner}
      />

      {/* Tarjeta con la IP del dispositivo */}
      <View style={styles.ipCard}>
        <Text style={styles.ipLabel}>📡 IP del Dispositivo Conectado:</Text>
        <Text style={styles.ipValor}>{ipDispositivo}</Text>
      </View>

      <TouchableOpacity
        style={styles.botonPrincipal}
        onPress={() => navigation.navigate('Evaluación')}
      >
        <Text style={styles.botonTexto}>🩺 Evaluar mis Síntomas Ahora</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => navigation.navigate('Guía')}
      >
        <Text style={styles.botonSecundarioTexto}>📋 Ver Guía Médica Completa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F0F4F8', alignItems: 'center' },
  badge: { backgroundColor: '#D1FAE5', color: '#065F46', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, fontWeight: '700', marginTop: 10 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#0F172A', marginTop: 10, textAlign: 'center' },
  subtitulo: { fontSize: 15, color: '#475569', textAlign: 'center', marginTop: 8, marginBottom: 18 },
  banner: { width: '100%', height: 165, borderRadius: 14, marginBottom: 16 },
  ipCard: { backgroundColor: '#E0F2FE', borderWidth: 1, borderColor: '#7DD3FC', padding: 12, borderRadius: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  ipLabel: { fontSize: 13, fontWeight: '600', color: '#0369A1' },
  ipValor: { fontSize: 14, fontWeight: 'bold', color: '#0F172A', fontFamily: 'monospace' },
  botonPrincipal: { backgroundColor: '#0284C7', paddingVertical: 15, borderRadius: 10, width: '100%', alignItems: 'center', marginBottom: 12 },
  botonTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  botonSecundario: { backgroundColor: '#FFFFFF', borderWidth: 1.5, borderColor: '#0284C7', paddingVertical: 13, borderRadius: 10, width: '100%', alignItems: 'center' },
  botonSecundarioTexto: { color: '#0284C7', fontSize: 16, fontWeight: 'bold' },
});
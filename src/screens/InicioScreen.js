import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.badge}>Asistente de Salud · MVP v1.0</Text>
      <Text style={styles.titulo}>Médico Virtual</Text>
      <Text style={styles.subtitulo}>
        Orientación médica básica, guía rápida de síntomas y registro de consultas desde tu celular.
      </Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600' }}
        style={styles.banner}
      />

      <View style={styles.tarjeta}>
        <Text style={styles.tarjetaTitulo}>¿Cómo te ayudamos hoy?</Text>
        <Text style={styles.tarjetaTexto}>
          Consulta recomendaciones preventivas según tus síntomas o registra una nueva valoración
          para llevar control de tu estado de salud.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botonPrincipal}
        onPress={() => navigation.navigate('Guía')}
      >
        <Text style={styles.botonTexto}>Ver Guía de Síntomas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => navigation.navigate('Consulta')}
      >
        <Text style={styles.botonSecundarioTexto}>Registrar Nueva Consulta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F0F4F8', alignItems: 'center' },
  badge: { backgroundColor: '#D1FAE5', color: '#065F46', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, fontWeight: '700', marginTop: 10 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#0F172A', marginTop: 12, textAlign: 'center' },
  subtitulo: { fontSize: 15, color: '#475569', textAlign: 'center', marginTop: 8, marginBottom: 20 },
  banner: { width: '100%', height: 180, borderRadius: 14, marginBottom: 20 },
  tarjeta: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, width: '100%', marginBottom: 24, elevation: 2 },
  tarjetaTitulo: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 6 },
  tarjetaTexto: { fontSize: 14, color: '#475569', lineHeight: 20 },
  botonPrincipal: { backgroundColor: '#0284C7', paddingVertical: 14, borderRadius: 10, width: '100%', alignItems: 'center', marginBottom: 12 },
  botonTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  botonSecundario: { backgroundColor: '#FFFFFF', borderWidth: 1.5, borderColor: '#0284C7', paddingVertical: 13, borderRadius: 10, width: '100%', alignItems: 'center' },
  botonSecundarioTexto: { color: '#0284C7', fontSize: 16, fontWeight: 'bold' },
});
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { SINTOMAS_CATALOGO } from '../data/sintomasData';

export default function ConsultaScreen({ onRegistrarHistorial }) {
  const [seleccionado, setSeleccionado] = useState(null);

  const manejarSeleccion = (item) => {
    setSeleccionado(item);
    onRegistrarHistorial(item);

    if (item.esMayor) {
      Alert.alert(
        '⚠️ Atención Médica Requerida',
        `Has seleccionado "${item.sintoma}". Este es un síntoma mayor. Debes acudir a un doctor o centro de salud lo antes posible.`,
        [{ text: 'Entendido' }]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>¿Qué síntoma sientes hoy?</Text>
      <Text style={styles.subtitulo}>
        Toca una opción para que Hestia evalúe si puedes tratarlo en casa o necesitas ver a un doctor.
      </Text>

      <View style={styles.grid}>
        {SINTOMAS_CATALOGO.map((item) => {
          const activo = seleccionado?.id === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.chip,
                activo && (item.esMayor ? styles.chipMayorActivo : styles.chipLeveActivo),
              ]}
              onPress={() => manejarSeleccion(item)}
            >
              <Text style={[styles.chipTexto, activo && styles.chipTextoActivo]}>
                {item.esMayor ? '🔴 ' : '🟢 '}
                {item.sintoma}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {seleccionado && (
        <View style={[styles.resultadoCard, seleccionado.esMayor ? styles.cardAlerta : styles.cardCuidado]}>
          <Text style={styles.resultadoBadge}>
            {seleccionado.esMayor ? '🚨 SÍNTOMA MAYOR — ACUDE AL DOCTOR' : '✅ SÍNTOMA LEVE — TRATABLE EN CASA'}
          </Text>
          <Text style={styles.resultadoTitulo}>{seleccionado.sintoma}</Text>
          <Text style={styles.resultadoEspecialidad}>Especialidad: {seleccionado.especialidad}</Text>
          <Text style={styles.resultadoTexto}>{seleccionado.recomendacion}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F0F4F8' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 },
  subtitulo: { fontSize: 14, color: '#475569', marginBottom: 18 },
  grid: { gap: 10, marginBottom: 22 },
  chip: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, borderWidth: 1.5, borderColor: '#CBD5E1' },
  chipLeveActivo: { backgroundColor: '#0284C7', borderColor: '#0284C7' },
  chipMayorActivo: { backgroundColor: '#DC2626', borderColor: '#DC2626' },
  chipTexto: { fontSize: 15, fontWeight: '600', color: '#1E293B' },
  chipTextoActivo: { color: '#FFFFFF' },
  resultadoCard: { padding: 18, borderRadius: 14, borderWidth: 2, elevation: 3 },
  cardCuidado: { backgroundColor: '#ECFDF5', borderColor: '#10B981' },
  cardAlerta: { backgroundColor: '#FEF2F2', borderColor: '#EF4444' },
  resultadoBadge: { fontSize: 12, fontWeight: '800', marginBottom: 6, color: '#0F172A' },
  resultadoTitulo: { fontSize: 19, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  resultadoEspecialidad: { fontSize: 13, fontWeight: '600', color: '#475569', marginBottom: 8 },
  resultadoTexto: { fontSize: 15, color: '#1E293B', lineHeight: 22 },
});
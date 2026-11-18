import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function GuiaScreen({ consultas, navigation }) {
  const [filtro, setFiltro] = useState('');

  const consultasFiltradas = consultas.filter(
    (item) =>
      item.sintoma.toLowerCase().includes(filtro.toLowerCase()) ||
      item.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.imagen} />
      <View style={styles.cardBody}>
        <View style={styles.filaSuperior}>
          <Text style={styles.especialidad}>{item.especialidad}</Text>
          <Text style={styles.urgencia}>Urgencia: {item.urgencia}</Text>
        </View>
        <Text style={styles.cardTitulo}>{item.sintoma}</Text>
        <Text style={styles.cardDesc}>{item.recomendacion}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por síntoma o especialidad..."
        value={filtro}
        onChangeText={setFiltro}
      />

      <FlatList
        data={consultasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 70 }}
        ListEmptyComponent={
          <Text style={styles.vacio}>No se encontraron síntomas con esa búsqueda.</Text>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Evaluación')}
      >
        <Text style={styles.fabTexto}>+ Nueva Consulta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8', padding: 16 },
  input: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 12, fontSize: 15, borderWidth: 1, borderColor: '#CBD5E1', marginBottom: 14 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, marginBottom: 14, overflow: 'hidden', elevation: 2 },
  imagen: { width: '100%', height: 130 },
  cardBody: { padding: 14 },
  filaSuperior: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  especialidad: { color: '#0284C7', fontWeight: 'bold', fontSize: 12, textTransform: 'uppercase' },
  urgencia: { color: '#64748B', fontSize: 12, fontWeight: '600' },
  cardTitulo: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#475569' },
  vacio: { textAlign: 'center', color: '#64748B', marginTop: 30, fontSize: 15 },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#0284C7', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 25, elevation: 4 },
  fabTexto: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
});
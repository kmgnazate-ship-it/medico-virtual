import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function ConsultaScreen({ onAgregarConsulta, navigation }) {
  const [sintoma, setSintoma] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [recomendacion, setRecomendacion] = useState('');

  const handleGuardar = () => {
    if (!sintoma.trim() || !especialidad.trim() || !urgencia.trim() || !recomendacion.trim()) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los datos de la consulta.');
      return;
    }

    const nuevaConsulta = {
      id: Date.now().toString(),
      sintoma: sintoma.trim(),
      especialidad: especialidad.trim(),
      urgencia: urgencia.trim(),
      recomendacion: recomendacion.trim(),
      imagen: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400',
    };

    onAgregarConsulta(nuevaConsulta);
    setSintoma('');
    setEspecialidad('');
    setUrgencia('');
    setRecomendacion('');

    Alert.alert('Consulta registrada', 'Se añadió tu síntoma a la guía médica.');
    navigation.navigate('Guía');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registrar Consulta Rápida</Text>
      <Text style={styles.subtitulo}>Describe tu malestar para añadirlo a la lista de seguimiento.</Text>

      <Text style={styles.label}>Síntoma principal *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Tos seca y congestión"
        value={sintoma}
        onChangeText={setSintoma}
      />

      <Text style={styles.label}>Especialidad sugerida *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Medicina General o Neumología"
        value={especialidad}
        onChangeText={setEspecialidad}
      />

      <Text style={styles.label}>Nivel de urgencia *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Baja, Media o Alta"
        value={urgencia}
        onChangeText={setUrgencia}
      />

      <Text style={styles.label}>Observación o recomendación *</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Detalles del malestar o medidas iniciales..."
        value={recomendacion}
        onChangeText={setRecomendacion}
        multiline
        numberOfLines={3}
      />

      <TouchableOpacity style={styles.boton} onPress={handleGuardar}>
        <Text style={styles.botonTexto}>Guardar Consulta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F0F4F8' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 },
  subtitulo: { fontSize: 14, color: '#475569', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#1E293B', marginBottom: 6 },
  input: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 12, fontSize: 15, borderWidth: 1, borderColor: '#CBD5E1', marginBottom: 14 },
  textArea: { height: 90, textAlignVertical: 'top' },
  boton: { backgroundColor: '#0284C7', paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  botonTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
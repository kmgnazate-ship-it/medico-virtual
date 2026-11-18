import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hjigcwrlvztuoyijfxyc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ay-7KrB7hZPWladG_Kr2_Q_eZGZinpf';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Guarda un síntoma evaluado en PostgreSQL (Supabase)
export const guardarConsultaSupabase = async (item) => {
  const { error } = await supabase.from('historial_consultas').insert([
    {
      sintoma: item.sintoma,
      especialidad: item.especialidad,
      urgencia: item.urgencia,
      es_mayor: item.esMayor,
      recomendacion: item.recomendacion,
    },
  ]);

  if (error) {
    console.log('Error al guardar en Supabase:', error.message);
  }
};

// Obtiene el historial guardado en la nube
export const obtenerConsultasSupabase = async () => {
  const { data, error } = await supabase
    .from('historial_consultas')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.log('Error al leer Supabase:', error.message);
    return [];
  }

  return data.map((fila) => ({
    id: `supa-${fila.id}`,
    sintoma: fila.sintoma,
    especialidad: fila.especialidad,
    urgencia: fila.urgencia,
    esMayor: fila.es_mayor,
    recomendacion: fila.recomendacion,
    imagen: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
  }));
};
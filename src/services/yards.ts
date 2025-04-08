import { Yard } from "@/types/yard";

const BASE_URL = import.meta.env.VITE_API_URL;

// Crear nueva yarda
export async function createYard(yard: Omit<Yard, 'id'>): Promise<Yard> {
  try {
    const response = await fetch(`${BASE_URL}/yards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(yard)
    });

    if (!response.ok) throw new Error('Error creando yarda');

    return await response.json();
  } catch (error) {
    console.error('Error en createYard:', error);
    throw error;
  }
}

// Obtener todas las yardas
export async function getAllYards(params?: Record<string, string>): Promise<Yard[]> {
  try {
    const query = params ? new URLSearchParams(params).toString() : '';
    const response = await fetch(`${BASE_URL}/yards?${query}`);

    if (!response.ok) throw new Error('Error obteniendo yardas');

    return await response.json();
  } catch (error) {
    console.error('Error en getAllYards:', error);
    throw error;
  }
}

// Obtener yarda por ID
export async function getYardById(id: string): Promise<Yard> {
  try {
    const response = await fetch(`${BASE_URL}/yards/${id}`);

    if (!response.ok) throw new Error('Yarda no encontrada');

    return await response.json();
  } catch (error) {
    console.error(`Error obteniendo yarda ${id}:`, error);
    throw error;
  }
}

// Actualizar yarda
export async function updateYard(id: string, updates: Partial<Yard>): Promise<Yard> {
  try {
    const response = await fetch(`${BASE_URL}/yards/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) throw new Error('Error actualizando yarda');

    return await response.json();
  } catch (error) {
    console.error(`Error actualizando yarda ${id}:`, error);
    throw error;
  }
}

// Eliminar yarda
export async function deleteYard(id: string): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/yards/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Error eliminando yarda');

  } catch (error) {
    console.error(`Error eliminando yarda ${id}:`, error);
    throw error;
  }
}

// Obtener yardas por supervisor
export async function getYardsBySupervisor(supervisorId: string): Promise<Yard[]> {
  try {
    const response = await fetch(`${BASE_URL}/yards?supervisorId=${supervisorId}`);

    if (!response.ok) throw new Error('Error obteniendo yardas por supervisor');

    return await response.json();
  } catch (error) {
    console.error(`Error obteniendo yardas para supervisor ${supervisorId}:`, error);
    throw error;
  }
}

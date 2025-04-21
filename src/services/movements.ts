// services/movements.ts
import { Movement, MovementLog } from "@/types/movement";

const BASE_URL = import.meta.env.VITE_URL;

// Crear nuevo movimiento
export async function createMovement(movement: Movement): Promise<MovementLog> {
  try {
    const response = await fetch(`${BASE_URL}/api/movements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Ejemplo de autenticación
      },
      body: JSON.stringify(movement)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error creando movimiento');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
      vehicle: data.vehicle ? {
        ...data.vehicle,
        data: {
          ...data.vehicle.data,
          keysDelivered: Boolean(data.vehicle.data.keysDelivered)
        }
      } : null
    };
  } catch (error) {
    console.error('Error en createMovement:', error);
    throw error;
  }
}

// Obtener todos los movimientos
export async function getAllMovements(): Promise<MovementLog[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/movements`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo movimientos');
    }

    const data = await response.json();
    return data.map((movement: any) => ({
      ...movement,
      createdAt: new Date(movement.createdAt),
      updatedAt: new Date(movement.updatedAt),
      vehicle: movement.vehicle ? {
        ...movement.vehicle,
        data: {
          ...movement.vehicle.data,
          keysDelivered: Boolean(movement.vehicle.data.keysDelivered)
        }
      } : null
    }));
  } catch (error) {
    console.error('Error en getAllMovements:', error);
    throw error;
  }
}

// Obtener movimiento por ID
export async function getMovementById(id: number): Promise<MovementLog> {
  try {
    const response = await fetch(`${BASE_URL}/api/movements/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Movimiento no encontrado');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
      vehicle: data.vehicle ? {
        ...data.vehicle,
        data: {
          ...data.vehicle.data,
          keysDelivered: Boolean(data.vehicle.data.keysDelivered)
        }
      } : null
    };
  } catch (error) {
    console.error(`Error obteniendo movimiento ${id}:`, error);
    throw error;
  }
}

// Actualizar movimiento
export async function updateMovement(id: number, movementData: Partial<Movement>): Promise<MovementLog> {
  try {
    const response = await fetch(`${BASE_URL}/api/movements/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(movementData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error actualizando movimiento');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
      vehicle: data.vehicle ? {
        ...data.vehicle,
        data: {
          ...data.vehicle.data,
          keysDelivered: Boolean(data.vehicle.data.keysDelivered)
        }
      } : null
    };
  } catch (error) {
    console.error(`Error actualizando movimiento ${id}:`, error);
    throw error;
  }
}

// Eliminar movimiento
export async function deleteMovement(id: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/api/movements/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error eliminando movimiento');
    }
  } catch (error) {
    console.error(`Error eliminando movimiento ${id}:`, error);
    throw error;
  }
}

// Obtener movimientos por yarda (patio)
export async function getMovementsByYard(yardId: number): Promise<MovementLog[]> {
  try {
    const response = await fetch(`${BASE_URL}/movements?yardId=${yardId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo movimientos por yarda');
    }

    const data = await response.json();
    return data.map((movement: any) => ({
      ...movement,
      createdAt: new Date(movement.createdAt),
      updatedAt: new Date(movement.updatedAt),
      vehicle: movement.vehicle ? {
        ...movement.vehicle,
        data: {
          ...movement.vehicle.data,
          keysDelivered: Boolean(movement.vehicle.data.keysDelivered)
        }
      } : null
    }));
  } catch (error) {
    console.error(`Error obteniendo movimientos para yarda ${yardId}:`, error);
    throw error;
  }
}

// Obtener movimientos por conductor
export async function getMovementsByDriver(driverId: number): Promise<MovementLog[]> {
  try {
    const response = await fetch(`${BASE_URL}/movements?driverId=${driverId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo movimientos por conductor');
    }

    const data = await response.json();
    return data.map((movement: any) => ({
      ...movement,
      createdAt: new Date(movement.createdAt),
      updatedAt: new Date(movement.updatedAt),
      vehicle: movement.vehicle ? {
        ...movement.vehicle,
        data: {
          ...movement.vehicle.data,
          keysDelivered: Boolean(movement.vehicle.data.keysDelivered)
        }
      } : null
    }));
  } catch (error) {
    console.error(`Error obteniendo movimientos para conductor ${driverId}:`, error);
    throw error;
  }
}

import { Vehicle } from "@/types/vehicle";

const BASE_URL = import.meta.env.VITE_URL;

export async function createVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error creando vehículo');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error('Error en createVehicle:', error);
    throw error;
  }
}

export async function getAllVehicles(): Promise<Vehicle[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo vehículos');
    }

    const data = await response.json();
    return data.map((vehicle: any) => ({
      ...vehicle,
      createdAt: new Date(vehicle.createdAt),
      updatedAt: new Date(vehicle.updatedAt)
    }));
  } catch (error) {
    console.error('Error en getAllVehicles:', error);
    throw error;
  }
}

export async function getVehicleById(id: number): Promise<Vehicle> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Vehículo no encontrado');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error(`Error obteniendo vehículo ${id}:`, error);
    throw error;
  }
}

export async function updateVehicle(id: number, updates: Partial<Vehicle>): Promise<Vehicle> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error actualizando vehículo');
    }

    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error(`Error actualizando vehículo ${id}:`, error);
    throw error;
  }
}

export async function deleteVehicle(id: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error eliminando vehículo');
    }
  } catch (error) {
    console.error(`Error eliminando vehículo ${id}:`, error);
    throw error;
  }
}

// Opcional: Filtrar vehículos por tipo
export async function getVehiclesByType(type: string): Promise<Vehicle[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/vehicles?type=${encodeURIComponent(type)}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error filtrando vehículos');
    }

    const data = await response.json();
    return data.map((vehicle: any) => ({
      ...vehicle,
      createdAt: new Date(vehicle.createdAt),
      updatedAt: new Date(vehicle.updatedAt)
    }));
  } catch (error) {
    console.error(`Error obteniendo vehículos tipo ${type}:`, error);
    throw error;
  }
}

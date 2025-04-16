// services/drivers.ts
import { Driver } from "@/types/driver";

const BASE_URL = import.meta.env.VITE_URL;

// Crear nuevo conductor
export async function createDriver(driver: Omit<Driver, 'id'>): Promise<Driver> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...driver,
        licenseExpiry: driver.licenseExpiry.toISOString()
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error creando conductor');
    }

    const data = await response.json();
    return {
      ...data,
      licenseExpiry: new Date(data.licenseExpiry),
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error('Error en createDriver:', error);
    throw error;
  }
}

// Obtener todos los conductores
export async function getAllDrivers(): Promise<Driver[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo conductores');
    }

    const data = await response.json();
    return data.map((driver: any) => ({
      ...driver,
      licenseExpiry: new Date(driver.licenseExpiry),
      createdAt: new Date(driver.createdAt),
      updatedAt: new Date(driver.updatedAt)
    }));
  } catch (error) {
    console.error('Error en getAllDrivers:', error);
    throw error;
  }
}

// Actualizar conductor
export async function updateDriver(id: number, driverData: Partial<Driver>): Promise<Driver> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...driverData,
        licenseExpiry: driverData.licenseExpiry?.toISOString()
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error actualizando conductor');
    }

    const data = await response.json();
    return {
      ...data,
      licenseExpiry: new Date(data.licenseExpiry),
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error(`Error actualizando conductor ${id}:`, error);
    throw error;
  }
}

// Eliminar conductor
export async function deleteDriver(id: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error eliminando conductor');
    }
  } catch (error) {
    console.error(`Error eliminando conductor ${id}:`, error);
    throw error;
  }
}

// Obtener conductor por ID
export async function getDriverById(id: number): Promise<Driver> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Conductor no encontrado');
    }

    const data = await response.json();
    return {
      ...data,
      licenseExpiry: new Date(data.licenseExpiry),
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt)
    };
  } catch (error) {
    console.error(`Error obteniendo conductor ${id}:`, error);
    throw error;
  }
}

// Obtener conductores por empresa de transporte
export async function getDriversByTransportCompany(company: string): Promise<Driver[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/drivers?transportCompany=${encodeURIComponent(company)}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error obteniendo conductores por empresa');
    }

    const data = await response.json();
    return data.map((driver: any) => ({
      ...driver,
      licenseExpiry: new Date(driver.licenseExpiry),
      createdAt: new Date(driver.createdAt),
      updatedAt: new Date(driver.updatedAt)
    }));
  } catch (error) {
    console.error(`Error obteniendo conductores para ${company}:`, error);
    throw error;
  }
}

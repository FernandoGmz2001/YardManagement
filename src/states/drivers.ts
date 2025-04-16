// hooks/useDrivers.ts
import { useState } from 'react';
import { Driver } from '@/types/driver';
import {
  createDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver,
  getDriversByTransportCompany
} from '@/services/drivers';

export const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDrivers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getAllDrivers();
      setDrivers(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar conductores');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateDriver = async (driverData: Omit<Driver, 'id'>) => {
    try {
      setIsLoading(true);
      const newDriver = await createDriver(driverData);
      setDrivers(prev => [newDriver, ...prev]);
      return newDriver;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear conductor');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateDriver = async (id: number, updates: Partial<Driver>) => {
    try {
      setIsLoading(true);
      const updatedDriver = await updateDriver(id, updates);
      setDrivers(prev =>
        prev.map(driver => driver.id === id ? updatedDriver : driver)
      );
      return updatedDriver;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar conductor');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteDriver = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteDriver(id);
      setDrivers(prev => prev.filter(driver => driver.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar conductor');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const loadDriversByCompany = async (company: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getDriversByTransportCompany(company);
      setDrivers(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al filtrar conductores');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    drivers,
    isLoading,
    error,
    loadDrivers,
    createDriver: handleCreateDriver,
    updateDriver: handleUpdateDriver,
    deleteDriver: handleDeleteDriver,
    getDriversByCompany: loadDriversByCompany
  };
};

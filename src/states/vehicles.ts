import { useState } from 'react';
import { Vehicle } from '@/types/vehicle';
import {
  createVehicle,
  getAllVehicles,
  updateVehicle,
  deleteVehicle
} from '@/services/vehicles';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVehicles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getAllVehicles();
      setVehicles(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando vehículos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateVehicle = async (vehicleData: Omit<Vehicle, 'id'>) => {
    try {
      setIsLoading(true);
      const newVehicle = await createVehicle(vehicleData);
      setVehicles(prev => [newVehicle, ...prev]);
      return newVehicle;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creando vehículo');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateVehicle = async (id: number, updates: Partial<Vehicle>) => {
    try {
      setIsLoading(true);
      const updatedVehicle = await updateVehicle(id, updates);
      setVehicles(prev =>
        prev.map(vehicle => vehicle.id === id ? updatedVehicle : vehicle)
      );
      return updatedVehicle;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error actualizando vehículo');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteVehicle(id);
      setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error eliminando vehículo');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    vehicles,
    isLoading,
    error,
    loadVehicles,
    createVehicle: handleCreateVehicle,
    updateVehicle: handleUpdateVehicle,
    deleteVehicle: handleDeleteVehicle,
  };
};

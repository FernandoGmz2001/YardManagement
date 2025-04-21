// hooks/useMovements.ts
import { useState } from 'react';
import { MovementLog, Movement } from '@/types/movement';
import {
  createMovement,
  getAllMovements,
  updateMovement,
  deleteMovement,
  getMovementsByYard,
  getMovementsByDriver
} from '@/services/movements';

export const useMovements = () => {
  const [movements, setMovements] = useState<MovementLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMovement, setCurrentMovement] = useState<MovementLog | null>(null);

  const loadMovements = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getAllMovements();
      setMovements(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar movimientos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateMovement = async (movementData: Movement) => {
    try {
      setIsLoading(true);
      const newMovement = await createMovement(movementData);
      setMovements(prev => [newMovement, ...prev]);
      return newMovement;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear movimiento');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateMovement = async (id: number, updates: Partial<Movement>) => {
    try {
      setIsLoading(true);
      const updatedMovement = await updateMovement(id, updates);
      setMovements(prev =>
        prev.map(movement => movement.id === id ? updatedMovement : movement)
      );
      if (currentMovement?.id === id) {
        setCurrentMovement(updatedMovement);
      }
      return updatedMovement;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar movimiento');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMovement = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteMovement(id);
      setMovements(prev => prev.filter(movement => movement.id !== id));
      if (currentMovement?.id === id) {
        setCurrentMovement(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar movimiento');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const loadMovementsByYard = async (yardId: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getMovementsByYard(yardId);
      setMovements(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al filtrar movimientos por yarda');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMovementsByDriver = async (driverId: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getMovementsByDriver(driverId);
      setMovements(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al filtrar movimientos por conductor');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getMovementById = async (id: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getMovementById(id);
      setCurrentMovement(response);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al obtener movimiento');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    movements,
    currentMovement,
    isLoading,
    error,
    loadMovements,
    createMovement: handleCreateMovement,
    updateMovement: handleUpdateMovement,
    deleteMovement: handleDeleteMovement,
    getMovementById,
    getMovementsByYard: loadMovementsByYard,
    getMovementsByDriver: loadMovementsByDriver,
    setCurrentMovement
  };
};

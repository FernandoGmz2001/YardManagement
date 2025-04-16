import { useState } from 'react';
import { Yard } from '@/types/yard';
import {
  createYard,
  getAllYards,
  getYardById,
  updateYard,
  deleteYard,
  getYardsBySupervisor
} from '@/services/yards';

export const useYards = () => {
  const [yards, setYards] = useState<Yard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadYards = async (params?: Record<string, string>) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getAllYards(params);
      setYards(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar yardas');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateYard = async (yardData: Omit<Yard, 'id'>) => {
    try {
      setIsLoading(true);
      const newYard = await createYard(yardData);
      setYards(prev => [newYard, ...prev]);
      return newYard;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear yarda');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateYard = async (id: string, updates: Partial<Yard>) => {
    try {
      setIsLoading(true);
      const updatedYard = await updateYard(id, updates);
      setYards(prev =>
        prev.map(yard => yard.id === id ? updatedYard : yard)
      );
      return updatedYard;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar yarda');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteYard = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteYard(id);
      setYards(prev => prev.filter(yard => yard.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar yarda');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchYardById = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      return await getYardById(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al obtener yarda');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchYardsBySupervisor = async (supervisorId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getYardsBySupervisor(supervisorId);
      setYards(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar yardas por supervisor');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    yards,
    isLoading,
    error,
    loadYards,
    createYard: handleCreateYard,
    updateYard: handleUpdateYard,
    deleteYard: handleDeleteYard,
    getYardById: fetchYardById,
    getYardsBySupervisor: fetchYardsBySupervisor
  };
};

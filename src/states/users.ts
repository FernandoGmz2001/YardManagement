import { useState } from 'react';
import { User } from '@/types/user';
import { createUser, getUsers, updateUser, deleteUser } from '@/services/users';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getUsers(); // Asumiendo paginación en el servicio
      setUsers(response?.data);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar usuarios');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateUser = async (userData: Omit<User, 'id'>) => {
    try {
      setIsLoading(true);
      const newUser = await createUser(userData);
      setUsers(prev => [newUser, ...prev]); // Agrega al inicio
      return newUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear usuario');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateUser = async (id: string, updates: Partial<User>) => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(id, updates);
      setUsers(prev =>
        prev.map(user => user.id === id ? updatedUser : user)
      );
      return updatedUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar usuario');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar usuario');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    // Estados
    users,
    isLoading,
    error,
    currentPage,
    totalPages,

    // Acciones
    loadUsers,
    createUser: handleCreateUser,
    updateUser: handleUpdateUser,
    deleteUser: handleDeleteUser,

    // Helpers
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
};

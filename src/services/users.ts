import { User } from "@/types/user";

const BASE_URL = import.meta.env.VITE_URL;

// Crear nuevo usuario
export async function createUser(user: Omit<User, 'id'>): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error creating user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in createUser:', error);
    throw error;
  }
}

// Obtener todos los usuarios
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error fetching users');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in getUsers:', error);
    throw error;
  }
}

// Actualizar usuario
export async function updateUser(id: string, userData: Partial<User>): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error updating user');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    throw error;
  }
}

// Eliminar usuario
export async function deleteUser(id: string): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error deleting user');
    }
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw error;
  }
}

// Obtener usuario por ID
export async function getUserById(id: string): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'User not found');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}

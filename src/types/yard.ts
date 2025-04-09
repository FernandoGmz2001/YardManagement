import { User } from "./user";

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE'
}

export interface Yard {
  id: number;
  name: string;
  location: string;
  maxCapacity: number;
  status: Status;
  supervisorId: number;
  createdAt: Date;
  updatedAt: Date;

  // Relaciones (asumiendo que estas interfaces existen)
  supervisor?: User;       // Relación con User
  // movements?: MovementLog[]; // Relación con MovementLog
}

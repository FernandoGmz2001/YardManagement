import { User } from "./user";

export enum Status {
  active = 'active',
  inactive = 'inactive',
  under_maintenance = 'under_maintenance'
}

export interface Yard {
  id: number;
  location: string;
  name: string;
  maxCapacity: number;
  status: Status;
  supervisorId: number;
  createdAt: Date;
  updatedAt: Date;

  // Relaciones (asumiendo que estas interfaces existen)
  supervisor?: User;       // Relación con User
  // movements?: MovementLog[]; // Relación con MovementLog
}

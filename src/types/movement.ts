import { Vehicle } from "./vehicle";

export interface Movement {
  type: 'entry' | 'exit';
  reason: 'load' | 'unload' | 'maintenance';
  yardId: number;
  driverId: number;
  vehicle: {
    id: number;
    data: Vehicle;
  };
  capturedById: number;
}

export interface MovementLog {
  id: number;
  type: string;
  reason: string;
  yardId: number;
  driverId?: number;
  vehicle?: {
    id: number;
    data: Vehicle;
  };
  capturedById: number;
  createdAt: Date;
  updatedAt: Date;
}


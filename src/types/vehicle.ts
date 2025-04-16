export interface Vehicle {
  id?: number;
  plate: string;
  serialNumber: string;
  keysDelivered: boolean;
  vin: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}


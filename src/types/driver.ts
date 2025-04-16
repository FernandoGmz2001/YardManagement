export interface Driver {
  id?: number;
  name: string;
  licenseNumber: string;
  phone: string;
  transportCompany: string;
  licenseExpiry: Date;
  createdAt?: Date;
  updatedAt?: Date;
}


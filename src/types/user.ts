
export enum Role {
  admin = "admin",
  supervisor = "supervisor",
  operator = "operator"
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

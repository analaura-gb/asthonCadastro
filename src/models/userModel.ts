export enum Role {
  COMMON = "COMMON",
  ASTHON = "ASTHON",
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}

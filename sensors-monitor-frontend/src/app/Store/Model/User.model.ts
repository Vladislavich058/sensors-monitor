export interface User {
  accessToken: string;
  type: string;
  id: number;
  username: string;
  role: string;
}

export interface UserCred {
  username: string;
  password: string;
}

export interface UserModel {
  isAuth: boolean,
  currentUser: User | null;
}

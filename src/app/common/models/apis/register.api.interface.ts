export interface RegistrationPayloadInterface { // tout ce qui est passé en paramètre d'une requête est appelé payload
  email:string;
  password:string;
}

export interface RegisterResponseInterface {
  user: RegisterUserResponseInterface;
  access_token: string;
  refresh_token: string;
}

export interface RegisterUserResponseInterface {
  email: string;
  id: number;
  created_at: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserResponse {
  data: {
    user: {
      email: string;
    };
    token: string;
  };
}

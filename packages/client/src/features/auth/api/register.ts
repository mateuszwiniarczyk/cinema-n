import { RegisterCredentials, UserResponse } from 'features/auth/types';
import { axios } from 'lib/axios';
import { useMutation } from 'react-query';

const register = (data: RegisterCredentials): Promise<UserResponse> =>
  axios.post('/user/register', data);

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};

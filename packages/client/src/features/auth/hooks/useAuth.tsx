import { UserResponse } from 'features/auth/types';
import { useEffect, useState } from 'react';

type UserData = UserResponse['data'];

export const useAuth = () => {
  const [user, setUser] = useState<UserData | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<unknown | null>();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile')!);

    if (!profile) return;

    setUser(profile);
  }, []);

  const updateUser = async (data: UserData) => {
    try {
      setIsLoading(true);
      localStorage.setItem('profile', JSON.stringify(data));
      setUser(data);
    } catch (error: unknown) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    updateUser,
    isLoading,
    isError,
  };
};

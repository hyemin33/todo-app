import api from '@src/apis';
import { ISignProps } from '@src/types/auth.type';

export const signUp = async ({ email, password }: ISignProps) => {
  return api.post('/auth/signup', { email, password });
};

export const signIn = async ({ email, password }: ISignProps) => {
  return api.post('/auth/signin', { email, password });
};

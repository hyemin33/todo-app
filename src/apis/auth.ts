import api from '@src/apis';
import { SignRequestProps } from './auth.type';

export const signUp = async ({ email, password }: SignRequestProps) => {
  return api.post('/auth/signin', { email, password });
};

export const signIn = async ({ email, password }: SignRequestProps) => {
  return api.post('/auth/signup', { email, password });
};

import { ISignProps } from '@src/types/auth.type';
import { useEffect, useState } from 'react';

const useValidation = (user: ISignProps) => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    user.email.includes('@')
      ? setEmailError('')
      : setEmailError('이메일을 다시 입력해주세요.');

    user.password.length > 8
      ? setPasswordError('')
      : setPasswordError('비밀번호는 8자리 이상 입력해주세요.');
  }, [user]);

  return [emailError, passwordError];
};

export default useValidation;

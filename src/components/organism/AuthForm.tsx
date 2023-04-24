import { useState } from 'react';
import { signIn, signUp } from '@src/apis/auth';
import auth from '@src/utils/auth';
import { useNavigate } from 'react-router-dom';


import { FlexCenterBox, Box } from '@src/components/atoms/Box';

import Button from '@src/components/atoms/Button';
import LabelInput from '@src/components/molecules/LabelInput';
import { H2 } from '@src/components/atoms/Typography';
import useValidation from '@src/utils/hooks/useValidation';

const AuthForm = ({ mode = '' }: { mode: string }) => {
  const navigate = useNavigate();

  const pageMode = mode === 'signin' ? '로그인' : '회원가입';

  const [user, setUser] = useState({ email: '', password: '' });
  const [emailError, passwordError] = useValidation(user);

  const handleChange =
    (text: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [text]: e.target.value });
    };

  const handleSubmit = async () => {
    if (emailError !== '' || passwordError !== '') {
      return;
    }
    try {
      if (mode === 'signin') {
        const res = await signIn({
          email: user.email,
          password: user.password,
        });

        auth.setToken(res.data.access_token);
        navigate('/todo');
      } else {
        await signUp({
          email: user.email,
          password: user.password,
        });
        navigate('/signin');
      }
    } catch (error) {
      if (error instanceof Error) {
        return alert(error);
      }
    }
  };

  return (
    <FlexCenterBox>
      <Box>
        <H2>{pageMode}</H2>
        <LabelInput
          label='이메일'
          type='text'
          placeholder='이메일을 입력해주세요.'
          onChange={handleChange('email')}
          error={emailError}
        />
        <LabelInput
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요.'
          onChange={handleChange('password')}
          error={passwordError}
        />
        <Button
          text={pageMode}
          disabled={user.email === '' || user.password === ''}
          onClick={handleSubmit}
        />
      </Box>
    </FlexCenterBox>
  );
};

export default AuthForm;

import { useState } from 'react';
import { signIn, signUp } from '@src/apis/auth';
import auth from '@src/utils/auth';
import { useNavigate } from 'react-router-dom';

import { FlexCenterBox, FormBox } from '../atoms/Box';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { H2 } from '../atoms/Typography';

const AuthForm = ({ mode = '' }: { mode: string }) => {
  const navigate = useNavigate();

  const pageMode = mode === 'signin' ? '로그인' : '회원가입';

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange =
    (text: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [text]: e.target.value });
    };

  const handleSubmit = async () => {
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
        navigate('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  return (
    <FlexCenterBox>
      <FormBox>
        <H2>{pageMode}</H2>
        <Input
          label='이메일'
          type='text'
          placeholder='이메일을 입력해주세요.'
          onChange={handleChange('email')}
        />
        <Input
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요.'
          onChange={handleChange('password')}
        />
        <Button
          text={pageMode}
          disabled={user.email === '' || user.password === ''}
          onClick={handleSubmit}
        />
      </FormBox>
    </FlexCenterBox>
  );
};

export default AuthForm;
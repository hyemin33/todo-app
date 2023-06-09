import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '@src/components/organism/AuthForm';
import auth from '@src/utils/auth';

const SigninPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.getToken()) {
      navigate('/todo');
    }
  }, []);

  return <AuthForm mode='signin' />;
};

export default SigninPage;

import AuthForm from '@src/components/organism/AuthForm';
import auth from '@src/utils/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.getToken()) {
      navigate('/todo');
    }
  }, []);
  return <AuthForm mode='signup' />;
};

export default SignupPage;

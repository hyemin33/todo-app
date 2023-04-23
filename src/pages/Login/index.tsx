import { signIn } from '@src/apis/auth';
import AuthForm from '@src/components/auth/AuthForm';

const LoginPage = () => {
  const handleSubmit = async () => {
    const res = await signIn({
      email: 'test9999@naver.com',
      password: 'qwe123123!!',
    });

    console.log(res);
  };

  return <AuthForm mode='login' />;
};

export default LoginPage;

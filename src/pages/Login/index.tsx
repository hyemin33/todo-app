import { signIn } from '@src/apis/auth';

const LoginPage = () => {
  const handleSubmit = async () => {
    const res = await signIn({
      email: 'test9999@naver.com',
      password: 'qwe123123!!',
    });

    console.log(res);
  };

  return (
    <div>
      로그인<button onClick={handleSubmit}></button>
    </div>
  );
};

export default LoginPage;

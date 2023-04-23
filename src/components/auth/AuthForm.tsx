import { FlexCenterBox, FormBox } from '../common/Box';
import { H2 } from '../common/Typography';

const AuthForm = ({ mode = '' }: { mode: string }) => {
  const pageMode = mode === 'login' ? '로그인' : '회원가입';
  return (
    <FlexCenterBox>
      <FormBox>
        <H2>{pageMode}</H2>
      </FormBox>
    </FlexCenterBox>
  );
};

export default AuthForm;

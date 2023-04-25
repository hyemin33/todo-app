import styled from '@emotion/styled';

import { FlexCenterBox, Box } from '@src/components/atoms/Box';
import Button from '@src/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <FlexCenterBox>
      <ButtonBox>
        <Button text='로그인' onClick={() => navigate('/signin')} />
        <Button text='회원가입' onClick={() => navigate('/signup')} />
      </ButtonBox>
    </FlexCenterBox>
  );
};

const ButtonBox = styled(Box)`
  & :last-of-type {
    margin-top: 10px;
  }
`;

export default MainPage;

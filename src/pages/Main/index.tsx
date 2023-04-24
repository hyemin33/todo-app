import { FlexCenterBox, Box } from '@src/components/atoms/Box';
import Button from '@src/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <FlexCenterBox>
      <Box>
        <Button text='로그인' onClick={() => navigate('/signin')} />
        <Button text='회원가입' onClick={() => navigate('/signup')} />
      </Box>
    </FlexCenterBox>
  );
};

export default MainPage;

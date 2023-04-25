import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from '@src/components/atoms/Button';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorArea>
      존재하지 않는 페이지입니다 <br />
      <ErrorButton
        width={100}
        text='홈으로 이동'
        onClick={() => navigate('/')}
      ></ErrorButton>
    </ErrorArea>
  );
};

const ErrorArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
const ErrorButton = styled(Button)`
  margin-top: 20px;
`;
export default ErrorPage;

import styled from '@emotion/styled';

import { H1 } from '@src/components/atoms/Typography';
import Button from '../atoms/Button';
import auth from '@src/utils/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClear = () => {
    auth.clearAppStorage();
    navigate('/');
  };

  return (
    <HeaderWrap>
      <H1>TODO APP</H1>
      {auth.getToken() && (
        <LogoutButton text='로그아웃' width={80} onClick={handleClear} />
      )}
    </HeaderWrap>
  );
};
const LogoutButton = styled(Button)`
  position: absolute;
  right: 20px;
`;
const HeaderWrap = styled.div`
  background: #ebe4f9;
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 -3px 10px 0 rgba(39, 39, 39, 0.2);
`;

export default Header;

import { H1 } from '@src/components/common/Typography';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderWrap>
      <H1>TODO APP</H1>
    </HeaderWrap>
  );
};

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

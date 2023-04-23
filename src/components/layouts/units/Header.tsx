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
  border-bottom: 1px solid #efefef;
  width: 100%;
  text-align: center;
`;

export default Header;

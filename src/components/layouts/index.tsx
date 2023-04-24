import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './units/Header';

const DefaultLayout = () => {
  return (
    <Wrap>
      <Header />
      <Body>
        <Container>
          <Outlet />
        </Container>
      </Body>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: #ebe4f9;
  overflow: hidden;
  position: relative;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 140px 0 50px;

`;

const Container = styled.div`
  max-width: 960px;

  width: 100%;
  height: 100%;
  padding: 0 20px;

`;
export default DefaultLayout;

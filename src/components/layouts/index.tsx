import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './units/Header';

const DefaultLayout = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #ebe4f9;
`;

const Container = styled.div`
  max-width: 960px;
  height: 100%;
  margin: auto;
  background: red;
`;
export default DefaultLayout;

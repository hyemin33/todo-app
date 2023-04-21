import { Outlet } from 'react-router-dom';
import { Container, Wrap } from './style';
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

export default DefaultLayout;

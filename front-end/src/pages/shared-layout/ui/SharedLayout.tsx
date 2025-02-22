import { Main, OutletContainer, Overlay, SharedLayoutComponent } from './style.tsx';
import { ToggleMenu } from '../../../widgets/burger-menu/lib';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  const { isOpen, toggleMenu } = ToggleMenu();
  return (
    <SharedLayoutComponent>
      <Header openMenu={toggleMenu} />
      <Main>
        <Sidebar close={toggleMenu} open={isOpen} />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Main>
      <Overlay open={isOpen} />
    </SharedLayoutComponent>
  );
};

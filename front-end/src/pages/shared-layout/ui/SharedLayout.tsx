import { Header, Overlay, SharedLayoutComponent } from './style.tsx';
import Logo from './../../../shared/assets/icons/PNG/logo.svg';
import { BurgerMenu } from '../../../widgets/burger-menu/ui';
import { ToggleMenu } from '../../../widgets/burger-menu/lib';
import { Sidebar } from '../../../shared/sidebar';

export const SharedLayout = () => {
  const {isOpen, toggleMenu} = ToggleMenu();
  return (
    <SharedLayoutComponent>
      <Sidebar close={toggleMenu} open={isOpen}/>
      <Header>
        <BurgerMenu onClick={toggleMenu}/>
        <img src={Logo} width={40} height={40}/>
        <h1>Medicine store</h1>
      </Header>
      <Overlay open={isOpen}/>
    </SharedLayoutComponent>
  );
};

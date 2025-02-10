import { Overlay, SharedLayoutComponent } from './style.tsx';
import { ToggleMenu } from '../../../widgets/burger-menu/lib';
import { Sidebar } from './sidebar';
import { Header } from './header';

export const SharedLayout = () => {
  const {isOpen, toggleMenu} = ToggleMenu();
  return (
    <SharedLayoutComponent>
      <Header openMenu={toggleMenu}/>
      <Sidebar close={toggleMenu} open={isOpen}/>
      <Overlay open={isOpen}/>
    </SharedLayoutComponent>
  );
};

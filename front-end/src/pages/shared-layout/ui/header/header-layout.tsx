import { BurgerMenu } from '../../../../widgets/burger-menu/ui';
import Logo from '../../../../shared/assets/icons/PNG/logo.svg';
import { HeaderComponent, VerticalLine } from './style.tsx';
import * as React from 'react';
import { HeaderPageTitles, HeaderProps } from './types.ts';
import { Logout } from '../../../../features';
import { useLocation } from 'react-router-dom';

export const Header: React.FC<HeaderProps> = ({openMenu}) => {
  const location = useLocation();

  const pageTitles: HeaderPageTitles = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/customers': 'All customers',
    '/orders': 'All orders',
    '/products': 'All products',
    '/suppliers': 'All suppliers',
  };

  const currentPageTitle = pageTitles[location.pathname] || 'Not page';

  return (
    <HeaderComponent>
      <div className='main'>
        <BurgerMenu onClick={openMenu}/>
        <img src={Logo} width={40} height={40}/>
        <div className='text-container'>
          <h1 className='title'>Medicine store</h1>
          <div className='container-sub-title'>
            <h2 className='sub-title name-title'>{currentPageTitle}</h2>
            <VerticalLine/>
            <h2 className='sub-title'>vendor@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className='logout-button'>
        <Logout/>
      </div>
    </HeaderComponent>
  );
}

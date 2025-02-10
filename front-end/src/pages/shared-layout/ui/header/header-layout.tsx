import { BurgerMenu } from '../../../../widgets/burger-menu/ui';
import Logo from '../../../../shared/assets/icons/PNG/logo.svg';
import { HeaderComponent, VerticalLine } from './style.tsx';
import * as React from 'react';
import { HeaderProps } from './types.ts';

export const Header: React.FC<HeaderProps> = ({openMenu}) => {
  return (
    <HeaderComponent>
      <BurgerMenu onClick={openMenu}/>
      <img src={Logo} width={40} height={40}/>
      <div className='text-container'>
        <h1 className='title'>Medicine store</h1>
        <div className='container-sub-title'>
          <h2 className='sub-title'>Dashboard</h2>
          <VerticalLine/>
          <h2 className='sub-title'>vendor@gmail.com</h2>
        </div>
      </div>
    </HeaderComponent>
  );
}

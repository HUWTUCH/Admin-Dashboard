import { NavigationMenu, SidebarMenu } from './style.tsx';
import * as React from 'react';
import { SidebarProps } from './types.ts';
import CloseIcon from '../../../../shared/assets/icons/SVG/close.svg';

export const Sidebar: React.FC<SidebarProps> = ({close, open}) => {
  return (
    <SidebarMenu open={open}>
      <button className='close-btn' type='button' onClick={close}>
        <img  src={CloseIcon} width={32} height={32}/>
      </button>
      <NavigationMenu>
        <button className='navigation-button'>1</button>
        <button className='navigation-button'>2</button>
        <button className='navigation-button'>3</button>
        <button className='navigation-button'>4</button>
        <button className='navigation-button'>5</button>
      </NavigationMenu>
    </SidebarMenu>
  )
}

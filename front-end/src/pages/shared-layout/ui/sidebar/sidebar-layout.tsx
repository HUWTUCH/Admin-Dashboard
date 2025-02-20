import { NavigationMenu, SidebarMenu } from './style.tsx';
import * as React from 'react';
import { SidebarProps } from './types.ts';
import CloseIcon from './../../../../shared/assets/icons/SVG/close.svg';
import dashboard from './../../../../shared/assets/icons/SVG/dashboard_not_active.svg';
import basket from './../../../../shared/assets/icons/SVG/bascket_not_active.svg';
import flask from './../../../../shared/assets/icons/SVG/flask_not_active.svg';
import customers from './../../../../shared/assets/icons/SVG/customers_not_active.svg';
import suppliers from './../../../../shared/assets/icons/SVG/suppliers_not_active.svg';
import { Logout } from '../../../../features';

export const Sidebar: React.FC<SidebarProps> = ({ close, open }) => {
  return (
    <SidebarMenu open={open}>
      <div style={{gap: 40,display: 'flex', flexDirection: 'column'}}>
        <button className="close-btn" type="button" onClick={close}>
          <img src={CloseIcon} width={32} height={32} />
        </button>
        <NavigationMenu>
          <button className="navigation-button">
            <img src={dashboard} width={32} height={32} />
          </button>
          <button className="navigation-button">
            <img src={basket} width={32} height={32} />
          </button>
          <button className="navigation-button">
            <img src={flask} width={32} height={32} />
          </button>
          <button className="navigation-button">
            <img src={suppliers} width={32} height={32} />
          </button>
          <button className="navigation-button">
            <img src={customers} width={32} height={32} />
          </button>
        </NavigationMenu>
      </div>
      <div className='logout-button'>
        <Logout />
      </div>
    </SidebarMenu>
  );
};

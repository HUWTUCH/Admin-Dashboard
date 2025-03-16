import { NavigationMenu, SidebarMenu } from './style.tsx';
import * as React from 'react';
import { SidebarProps } from './types.ts';
import CloseIcon from './../../../../shared/assets/icons/SVG/close.svg';
import dashboard from './../../../../shared/assets/icons/SVG/dashboard_not_active.svg';
import basket from './../../../../shared/assets/icons/SVG/bascket_not_active.svg';
import flask from './../../../../shared/assets/icons/SVG/flask_not_active.svg';
import customers from './../../../../shared/assets/icons/SVG/customers_not_active.svg';
import suppliers from './../../../../shared/assets/icons/SVG/suppliers_not_active.svg';
import dashboardActive from './../../../../shared/assets/icons/SVG/dashboard_active.svg';
import basketActive from './../../../../shared/assets/icons/SVG/bascket_active.svg';
import flaskActive from './../../../../shared/assets/icons/SVG/flask_active.svg';
import customersActive from './../../../../shared/assets/icons/SVG/customers_active.svg';
import suppliersActive from './../../../../shared/assets/icons/SVG/suppliers_active.svg';
import { Logout } from '../../../../features';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// TODO: Перенести в widgets/sidebar/ui/sidebar.tsx
export const Sidebar: React.FC<SidebarProps> = ({ close, open }) => {
  const [active, setActive] = useState(localStorage.getItem('active') || '/dashboard');

  const handleClick = (path: string) => {
    setActive(path);
    localStorage.setItem('active', path);
  };


  return (
    <SidebarMenu open={open}>
      <div style={{gap: 40,display: 'flex', flexDirection: 'column'}}>
        <button className="close-btn" type="button" onClick={close}>
          <img src={CloseIcon} width={32} height={32} />
        </button>
        <NavigationMenu>
          <NavLink to="/dashboard" className="navigation-button" onClick={() => handleClick('/dashboard')}>
            <img src={active === '/dashboard' ? dashboardActive : dashboard} width={32} height={32} />
          </NavLink>
          <NavLink to="/orders" className="navigation-button" onClick={() => handleClick('/orders')}>
            <img src={active === '/orders' ? basketActive : basket} width={32} height={32} />
          </NavLink>
          <NavLink to="/products" className="navigation-button" onClick={() => handleClick('/products')}>
            <img src={active === '/products' ? flaskActive : flask} width={32} height={32} />
          </NavLink>
          <NavLink to="/suppliers" className="navigation-button" onClick={() => handleClick('/suppliers')}>
            <img src={active === '/suppliers' ? suppliersActive : suppliers} width={32} height={32} />
          </NavLink>
          <NavLink to="/customers" className="navigation-button" onClick={() => handleClick('/customers')}>
            <img src={active === '/customers' ? customersActive : customers} width={32} height={32} />
          </NavLink>
        </NavigationMenu>
      </div>
      <div className='logout-button'>
        <Logout />
      </div>
    </SidebarMenu>
  );
};

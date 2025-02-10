import { BurgerButton } from './style.tsx';
import burger_icon from './../../../shared/assets/icons/SVG/burger_menu.svg';
import * as React from 'react';

interface BurgerMenuProps {
  onClick: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <BurgerButton type='button' onClick={onClick}>
      <img src={burger_icon} width={32} height={32} alt="Burger menu icon"/>
    </BurgerButton>
  );
};

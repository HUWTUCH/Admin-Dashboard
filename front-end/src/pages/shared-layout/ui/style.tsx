import styled from 'styled-components';
import { openSidebar } from './types.ts';

export const SharedLayoutComponent = styled.div`
    width: 100%;
    
    @media (min-width: 768px) {
        background-color: rebeccapurple;
    }
    
    @media (min-width: 1440px) {
        background-color: red;
    }
`;
export const Overlay = styled.div<openSidebar>`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed; /* Фіксуємо фон поверх інших елементів */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Затемнений фон */
    z-index: 999; /* Для того, щоб фон був під сайдбаром */
`;

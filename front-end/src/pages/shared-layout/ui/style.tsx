import styled from 'styled-components';
import { openSidebar } from './types.ts';

export const SharedLayoutComponent = styled.div`
    width: 100%;
    
    @media (min-width: 768px) {
        
    }
    
    @media (min-width: 1440px) {
    
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    
    
    @media (min-width: 1440px) {
        display: flex;
        flex-direction: row;
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

    @media (min-width: 1440px) {
        display: none;
    }
`;
export const OutletContainer = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
    @media (min-width: 768px) {
        margin-left: 32px;
    }
    @media (min-width: 1440px) {
        margin-left: 40px;
    }
`;

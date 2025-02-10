import styled from 'styled-components';
import { openSidebar } from '../types.ts';

export const SidebarMenu = styled.div<openSidebar>`
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    gap: 40px;
    padding-left: 20px;
    top: 0;
    width: 78px;
    height: 100vh;
    background-color: rgba(247, 248, 250, 1);
    border-right: 1px solid rgba(29, 30, 33, 0.1);
    z-index: 1000;

    .close-btn {
        margin-left: 12px;
        margin-top: 20px;
        width: 32px;
        background: none;
        border: none;
    };

    @media (min-width: 768px) {
        width: 84px;
    }
    @media (min-width: 1440px) {
        display: flex;
        position: relative;
        width: 80px;
        
        .close-btn {
            display: none;
        };
    }
`;
export const NavigationMenu = styled.div`
    display: flex;
    gap: 14px;
    flex-direction: column;
  .navigation-button {
      display: flex;
      width: 38px;
      height: 38px;
      border: none;
      border-radius: 100px;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);
  };
`;

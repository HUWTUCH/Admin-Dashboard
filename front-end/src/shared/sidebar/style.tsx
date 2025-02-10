import styled from 'styled-components';
import { openSidebar } from '../../pages/shared-layout/ui/types.ts';

export const SidebarMenu = styled.div<openSidebar>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 78px;
  height: 100vh;
  background-color: rebeccapurple;
  z-index: 1000;

    button {
        position: absolute;
        right: 14px;
        top: 20px;
        background: none;
        border: none;
    };
`;

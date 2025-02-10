import { SidebarMenu } from './style.tsx';
import * as React from 'react';
import { SidebarProps } from './types.ts';
import CloseIcon from './../assets/icons/SVG/close.svg'

export const Sidebar: React.FC<SidebarProps> = ({close, open}) => {
  return (
    <SidebarMenu open={open}>
      <button type='button' onClick={close}>
        <img  src={CloseIcon} width={32} height={32}/>
      </button>
      <h1>Hello</h1>
    </SidebarMenu>
  )
}

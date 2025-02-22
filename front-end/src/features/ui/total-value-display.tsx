import React from 'react';
import { TotalProductsProps } from '../models/types.ts';
import { ContainerTotalValue } from './style.tsx';

export const TotalProducts: React.FC<TotalProductsProps> = ({ quantity, imgSrc, title}) => {
  return (
    <ContainerTotalValue>
      <div className='total-products-header'>
        <img src={imgSrc} width={18} height={18}/>
        <h5 className='title'>{title}</h5>
      </div>
      <p className='quantity'>{quantity}</p>
    </ContainerTotalValue>
  );
};

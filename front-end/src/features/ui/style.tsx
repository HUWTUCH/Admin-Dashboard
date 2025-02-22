import styled from 'styled-components';

export const LogoutButtonContainer = styled.button`
    display: flex;
    width: 44px;
    height: 44px;
    border: none;
    align-items: center;
    border-radius: 22px;
    justify-content: center;
    background-color: rgba(89, 177, 122, 1);
`;
export const ContainerTotalValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 10px);
    max-width: 157px;
    height: 98px;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid rgba(89, 177, 122, 1);
    .total-products-header {
        display: flex;
        gap: 8px;
    },
    .title {
    font-size: 12px;
    font-weight: 400;
    color: rgba(29, 30, 33, 0.4);
    },
    .quantity {
    font-size: 16px;
    font-weight: 600;
    color: rgba(29, 30, 33, 1);
},
`;

import styled from 'styled-components';

export const SharedLayoutComponent = styled.div`
    width: 100%;
    
    @media (min-width: 768px) {
        background-color: rebeccapurple;
    }
    
    @media (min-width: 1440px) {
        background-color: red;
    }
`;
export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #DCDDDF;
`;

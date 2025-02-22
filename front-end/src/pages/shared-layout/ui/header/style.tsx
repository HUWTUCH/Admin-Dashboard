import styled from 'styled-components';

export const HeaderComponent = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #DCDDDF;
    
    .main{
        display: flex;
        gap: 20px;
        align-items: center;
        flex-direction: row;
    };
    
    .text-container {
        .title {
            font-weight: 600;
            font-size: 24px;
        };
    };
    .container-sub-title {
        display: flex;
        align-items: center;
        gap: 8px;
        .sub-title {
            font-weight: 400;
            font-size: 12px;
            color: rgba(29, 30, 33, 0.4);
        };
    };
    .logout-button {
        display: none;
    };
    @media (min-width: 1440px) {
        .logout-button {
            display: block;
        };
    }
`;
export const VerticalLine = styled.div`
  height: 12px;
  border-left: 1px solid rgba(29, 30, 33, 0.4);
`;

import styled from 'styled-components';

export const RecentCustomersContainer = styled.div`
    width: 335px;
    height: 460px;
    border-radius: 8px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    
    .container-header {
        display: flex;
        height: 48px;
        align-items: center;
        padding-left: 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: rgba(231, 241, 237, 1);
        
        h3{
            font-weight: 600;
            font-size: 16px;
            color: rgba(29, 30, 33, 1);
        };
    };
`;
export const TableCostumers = styled.div`
    display: grid;
    margin: 0 14px;
    grid-template-columns: 92px 151px 64px;
`;

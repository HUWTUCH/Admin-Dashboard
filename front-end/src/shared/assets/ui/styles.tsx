import styled from "styled-components";

export const FilterContainer =  styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    .input-filter {
        width: 224px;
        height: 44px;
        border-radius: 60px;
        padding: 0 10px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(29, 30, 33, 0.4);
    }
    
    .input-filter:focus {
        outline: none;
        border: none;
    }

    .button-filter {
        width: 116px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 60px;
        font-size: 12px;
        font-weight: 400;
        background-color: rgba(89, 177, 122, 1);
    }

    .button-filter:hover {
        cursor: pointer;
        background-color: rgba(63, 148, 95, 1);
    }

    span {
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
    }

    .filter-icon {
        width: 18px;
        height: 17px;
    }
`;



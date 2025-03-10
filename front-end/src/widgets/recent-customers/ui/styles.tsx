import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 335px;
    height: 460px;
    border-radius: 8px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    background-color: #fff;
    margin: 20px 0;

    .container-header {
        display: flex;
        height: 48px;
        align-items: center;
        padding-left: 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: rgba(231, 241, 237, 1);

        h3 {
            font-weight: 600;
            font-size: 16px;
            color: rgba(29, 30, 33, 1);
        }
    }


    @media (min-width: 1440px) {
            width: 1280px;
            height: 502px;
    }
`;

export const TableColumns = styled.div`
    margin: 0 14px;

    .table-header,
    .table-body {
        display: grid;
        grid-template-columns: 260px 299px 213px 263px 205px;
        align-items: center;
        border-bottom: 1px solid rgba(29, 30, 33, 0.1);
    }

    .columns {
        h5 {
            font-weight: 500;
            font-size: 14px;
            color: rgba(29, 30, 33, 0.4);
        }
    }
    .rows:nth-last-child(-n+4) {
        padding: 30px 0 30px 10px;
        border-left: 1px solid rgba(29, 30, 33, 0.1);
    }

    .columns:nth-last-child(-n+4) {
        padding: 14px 0 14px 10px;
        border-left: 1px solid rgba(29, 30, 33, 0.1);
    }

    .table-body
    .rows {
        display: grid;
        grid-template-columns: 260px 299px 213px 263px 205px;
        align-items: center;
    }

    .rows .user-info {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .rows img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    @media (min-width: 1440px) {
    .table-header,
    .table-body {
        display: grid;
        grid-template-columns: 260px 299px 213px 263px 205px;
        align-items: center;
        border-bottom: 1px solid rgba(29, 30, 33, 0.1);
    }

    .table-body,
    .rows {
        display: grid;
        grid-template-columns: 260px 299px 213px 263px 205px;
        align-items: center;
    }
    }
`;

export const RecentCustomersContainer = styled.div`
    width: 335px;
    height: 460px;
    border-radius: 8px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    background-color: #fff;
    margin: 20px 0;

    .container-header {
        display: flex;
        height: 48px;
        align-items: center;
        padding-left: 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: rgba(231, 241, 237, 1);

        h3 {
            font-weight: 600;
            font-size: 16px;
            color: rgba(29, 30, 33, 1);
        }
    }


    @media (min-width: 1440px) {
            width: 630px;
    }
`;

export const RecentCustomersColumns = styled.div`
    margin: 0 14px;

    .table-header,
    .table-body {
        display: grid;
        grid-template-columns: 203px 269px 118px;
        align-items: center;
        border-bottom: 1px solid rgba(29, 30, 33, 0.1);
    }

    .rows:nth-last-child(-n+2) {
        padding: 30px 0 30px 10px;
        border-left: 1px solid rgba(29, 30, 33, 0.1);
    }

    .columns:nth-last-child(-n+2) {
        padding: 14px 0 14px 10px;
        border-left: 1px solid rgba(29, 30, 33, 0.1);
    }

    .table-body
    .rows {
        display: grid;
        grid-template-columns: 203px 269px 118px;
        align-items: center;
    }

    .rows img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }

    @media (min-width: 1440px) {
    .table-header,
    .table-body {
        display: grid;
        grid-template-columns: 203px 269px 118px;
        align-items: center;
        border-bottom: 1px solid rgba(29, 30, 33, 0.1);
    }

    .table-body,
    .rows {
        display: grid;
        grid-template-columns: 203px 269px 118px;
        align-items: center;
    }
    }
`;
import styled from "styled-components";

export const TableContainer = styled.div<{
  columns: number;
}>`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  margin-top: 20px;
  width: 100%;
  padding-bottom: 20px;

  .table-header {
    display: flex;
    height: 48px;
    align-items: center;
    padding-left: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: rgba(231, 241, 237, 1);

    h3 {
      font-weight: 600;
      font-size: 18px;
      color: rgba(29, 30, 33, 1);
    }
  }

  .table-body {
    display: grid;
    padding: 0 20px;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  }

  .table-body-header {
    display: contents;
  }

  .table-body-column {
    font-weight: 500;
    font-size: 14px;
    color: rgba(29, 30, 33, 0.4);
    padding: 14px 10px;
    text-align: left;
    border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  }

  .table-body-column:nth-last-child(-n + ${({ columns }) => columns - 1}) {
    border-left: 1px solid rgba(29, 30, 33, 0.1);
  }

  .table-body-row {
    display: contents;
  }

  .table-body-cell {
    font-weight: 500;
    font-size: 16px;
    color: rgba(29, 30, 33, 1);
    padding: 14px 10px;
    border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  }

  .table-body-cell:nth-last-child(-n + ${({ columns }) => columns - 1}) {
    border-left: 1px solid rgba(29, 30, 33, 0.1);
  }
`;

import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  .blocks-general-indicators {
      display: flex;
      width: 335px;
      gap: 20px;
      flex-wrap: wrap;
  };
    @media (min-width: 545px) and (max-width: 1440px) {
        .blocks-general-indicators {
            display: flex;
            width: 525px;
            justify-content: space-between;
        };
    }
`;

import { RecentCustomersContainer, TableCostumers } from './styles.tsx';

export const RecentCustomersList = () => {
  return (
    <RecentCustomersContainer>
      <div className="container-header">
        <h3>Recent Customers</h3>
      </div>
      <TableCostumers>
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Spent</h5>
      </TableCostumers>
    </RecentCustomersContainer>
  );
};

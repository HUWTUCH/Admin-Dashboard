import { RecentCustomersColumns, RecentCustomersContainer } from './styles.tsx';

const customers = [
  { name: 'Dima', email: 'dima@gmail.com', spent: '2,585.30' },
  { name: 'Alex', email: 'alex@gmail.com', spent: '3,100.50' },
  { name: 'Kate', email: 'kate@gmail.com', spent: '1,985.75' },
];
// TODO: Перенести в pages/dashboard/ui/recent-customers-list/index.tsx
export const RecentCustomersList = () => {
  return (
    <RecentCustomersContainer>
      <div className="container-header">
        <h3>Recent Customers</h3>
      </div>
      <RecentCustomersColumns>
        <div className="table-header">
          <div className="columns"><h5>Name</h5></div>
          <div className="columns"><h5>Email</h5></div>
          <div className="columns"><h5>Spent</h5></div>
        </div>
        {customers.map((customer, index) => (
          <div key={index} className="table-body">
            <div className="rows">
              <h6>{customer.name}</h6>
            </div>
            <div className="rows">
              <h6>{customer.email}</h6>
            </div>
            <div className="rows">
              <h6>${customer.spent}</h6>
            </div>
          </div>
        ))}
      </RecentCustomersColumns>
    </RecentCustomersContainer>
  );
};

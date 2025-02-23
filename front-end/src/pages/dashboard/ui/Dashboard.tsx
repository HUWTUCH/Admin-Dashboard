import { TotalProducts } from '../../../features';
import productsIcon from '../../../shared/assets/icons/SVG/all_products.svg';
import suppliersIcon from '../../../shared/assets/icons/SVG/all_products.svg';
import customersIcon from '../../../shared/assets/icons/SVG/dable_people.svg';
import { ContainerDashboard } from './styles.tsx';
import { RecentCustomersList } from '../../../widgets/recent-customers';

export const Dashboard = () => {
  return (
    <ContainerDashboard>
      <div className='blocks-general-indicators'>
        <TotalProducts title='All products' imgSrc={productsIcon} quantity={'8,430'} />
        <TotalProducts title='All suppliers' imgSrc={suppliersIcon} quantity={211} />
        <TotalProducts title='All customers' imgSrc={customersIcon} quantity={140} />
      </div>
      <RecentCustomersList/>
    </ContainerDashboard>
  );
};

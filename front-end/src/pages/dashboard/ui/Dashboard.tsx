import { TotalProducts } from '../../../features';
import productsIcon from '../../../shared/assets/icons/SVG/all_products.svg';
import suppliersIcon from '../../../shared/assets/icons/SVG/all_products.svg';
import customersIcon from '../../../shared/assets/icons/SVG/dable_people.svg';
import { ContainerDashboard } from './styles.tsx';
import { RecentCustomersList } from '../../../widgets/tables/index.ts';
import { getDashboard } from '../../../features/api/get-dashboard.ts';
import { useFetchData } from '../../../shared/assets/hooks/useFetchData.ts';
import { Customer } from '../../all-customers/model/types.ts';
import { Supplier } from '../../all-suppliers/model/types.ts';
import { Product } from '../../all-products/ui/AllProducts.tsx';
// TODO: Перенсти TotalProducts на рівень сторінки в dashboard/ui
// TODO: Добавити суфікс Page в назву сторінки



interface DashboardData {
  statistics: {
    totalProducts: number;
    totalSuppliers: number;
    totalCustomers: number;
    totalRevenue: number;
  };
  recentProducts: Product[];
  recentSuppliers: Supplier[];
  recentCustomers: Customer[];
  topSellingProducts: Product[];
  recentOrders: {
    id: string;
    customer: string;
    products: string[];
    total: number;
    status: 'pending' | 'completed' | 'cancelled';
    date: string;
  }[];
}

export const Dashboard = () => {
  const { data: dashboard, loading, error } = useFetchData<DashboardData>(getDashboard);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error.message}</div>;
  if (!dashboard || Array.isArray(dashboard)) return <div>Немає даних</div>;

  console.log('dashboard', dashboard);

  const { statistics } = dashboard;

  return (
    <ContainerDashboard>
      <div className='blocks-general-indicators'>
        <TotalProducts 
          title='All products' 
          imgSrc={productsIcon} 
          quantity={statistics.totalProducts} 
        />
        <TotalProducts 
          title='All suppliers' 
          imgSrc={suppliersIcon} 
          quantity={statistics.totalSuppliers} 
        />
        <TotalProducts 
          title='All customers' 
          imgSrc={customersIcon} 
          quantity={statistics.totalCustomers} 
        />
      </div>
      {/* <Table columns={columns} data={data} /> */}
      <RecentCustomersList />
    </ContainerDashboard>
  );
};

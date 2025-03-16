// TODO: Добавити суфікс Page в назву сторінки
import { useState } from "react";
import { getOrders } from "../../../features/api/get-orders";
import { useFetchData } from "../../../shared/assets/hooks/useFetchData";
import { FilterTable } from "../../../shared/assets/ui/table-filter";
import { Table } from "../../../shared/ui/table";

const columns = [
  { key: 'name', label: 'User Info' },
  { key: 'address', label: 'Address' },
  { key: 'products', label: 'Products' },
  { key: 'order_date', label: 'Order date' },
  { key: 'price', label: 'Price' },
  { key: 'status', label: 'Status' },
];

interface Order {
  id: number;
  name: string;
  address: string;
  products: string;
  order_date: string;
  price: number;
  status: string;
}
export const AllOrders= () => {
  const { data: orders, loading, error } = useFetchData<Order[]>(getOrders);
  const [ordersFilter, setOrdersFilter] = useState<Order[]>([]);

  const ordersData = orders?.data?.data || [];


  const handleFilter = (value: string) => {
    const filteredOrders = ordersData?.filter((order: Order) => order.id.toString().includes(value));
    setOrdersFilter(filteredOrders);
  };

  const ordersToShow = ordersFilter.length > 0 ? ordersFilter : ordersData;

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers.</p>;
  if (!orders || orders.length === 0) return <p>No customers found.</p>;

  return (
    <div>
      <FilterTable name="Order ID" onFilter={handleFilter} />
      <Table columns={columns} data={ordersToShow} headerTitle="All Orders" />
    </div>
  );
};

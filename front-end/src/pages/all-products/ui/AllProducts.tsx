// TODO: Добавити суфікс Page в назву сторінки

import { useFetchData } from "../../../shared/assets/hooks/useFetchData";
import { Table } from "../../../shared/ui/table";
import { getProducts } from "../../../features/api/get-products";
import { FilterTable } from "../../../shared/assets/ui/table-filter";
import { useState } from "react";


export interface Product {
  id: number;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
}

const columns = [
  { key: 'name', label: 'Product Info' },
  { key: 'category', label: 'Category' },
  { key: 'stock', label: 'Stock' },
  { key: 'suppliers', label: 'Suppliers' },
  { key: 'price', label: 'Price' },
  { key: 'action', label: 'Action' },
];


export const AllProducts= () => {
  const [productsFilter, setProductsFilter] = useState<Product[]>([]);
  const {data: products, loading, error} = useFetchData<Product[]>(getProducts);

  const productsData = products?.data?.data || [];


  const handleFilter = (value: string) => {
    const filteredProducts = productsData.filter((product: Product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setProductsFilter(filteredProducts);
  };

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers.</p>;
  if (!products || products.length === 0) return <p>No customers found.</p>;

  const productsToShow = productsFilter.length > 0 ? productsFilter : productsData;

  return (
    <div>
      <FilterTable name="Product Name" onFilter={handleFilter} />
      <Table headerTitle="All Products" columns={columns} data={productsToShow} />
    </div>
  );
};

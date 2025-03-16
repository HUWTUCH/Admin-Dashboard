import { getSuppliers } from "../../../features/api/get-suplliers";
import { Supplier } from "../model/types";
import { useFetchData } from "../../../shared/assets/hooks/useFetchData";
import { FilterTable } from "../../../shared/assets/ui/table-filter";
import { useState } from "react";
import { EditWindowSuplliers } from "../../../features/edit-window/ui/edit-window-suplliers";
import { Table } from "../../../shared/ui/table";

const columns = [
  { key: 'name', label: 'Supplier Info' },
  { key: 'address', label: 'Address' },
  { key: 'suppliers', label: 'Company' },
  { key: 'date', label: 'Delivery date' },
  { key: 'amount', label: 'Amount' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' },
];

export const AllSuppliers= () => {
  const [suppliersFilter, setSuppliersFilter] = useState<Supplier[]>([]);
  const {data: suppliers, loading, error} = useFetchData<Supplier[]>(getSuppliers);
  // TODO: Перенести в кастомний хук openEditSupplierWindow і розмістити в pages/all-suppliers/lib/use-open-edit-supplier-window.ts
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<Supplier | null>(null);

  const handleOpenEditWindow = (item: Supplier) => {
    setIsOpen(true);
    setItem(item);
  };

  const handleCloseEditWindow = () => {
    setIsOpen(false);
    setItem(null);
  };

  const suppliersData = suppliers?.data?.data || [];

  const handleFilter = (value: string) => {
    const filteredSuppliers = suppliersData.filter((supplier: Supplier) => supplier.name.toLowerCase().includes(value.toLowerCase()));
    setSuppliersFilter(filteredSuppliers);
  };

  console.log('suppliers', suppliers?.data?.data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers.</p>;
  if (!suppliers || suppliers.length === 0) return <p>No customers found.</p>;

  const suppliersToShow = suppliersFilter.length > 0 ? suppliersFilter : suppliersData;
  

  return (
    <div>
      <FilterTable name="User Name" onFilter={handleFilter} />
      <EditWindowSuplliers isOpen={isOpen} onClose={handleCloseEditWindow} item={item} />
      <Table headerTitle="All Suppliers" columns={columns} data={suppliersToShow} />
    </div>
  );
};

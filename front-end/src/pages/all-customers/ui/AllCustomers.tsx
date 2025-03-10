import { getCustomers } from "../../../features/api/get-customers";
import { Customer } from "../model/types";
import { useFetchData } from "../../../shared/assets/hooks/useFetchData";
import { DataTable } from "../../../widgets/recent-customers";
import { FilterTable } from "../../../shared/assets/ui/table-filter";
import { useState } from "react";

export const AllCustomers= () => {
  const [customersFilter, setCustomersFilter] = useState<Customer[]>([]);
  const { data: response, loading, error} = useFetchData<Customer[]>(getCustomers);

  const customers = response?.data?.data || [];

  const handleFilter = (value: string) => {
    const filteredCustomers = customers.filter((customer: Customer) => customer.name.toLowerCase().includes(value.toLowerCase()));
    setCustomersFilter(filteredCustomers);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers.</p>;
  if (!customers || customers.length === 0) return <p>No customers found.</p>;

  const customersToShow = customersFilter.length > 0 ? customersFilter : customers;


  return (
    <div>
        <FilterTable name="User Name" onFilter={handleFilter} />
        <DataTable title="Customers Data" titleColumns={["User Info", "Email", "Address", "Phone", "Register Date"]} items={customersToShow} />
    </div>
  );
};

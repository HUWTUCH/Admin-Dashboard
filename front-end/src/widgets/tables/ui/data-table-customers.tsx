import { TableColumnsCustomers, TableContainerCustomers } from "./styles";

interface DataTableProps {
    title: string;
    titleColumns: string[];
    items: any[];
}
// TODO: Перенести в pages/all-customers/ui/data-table-customers/index.tsx
export const DataTableCustomers = ({title, titleColumns, items}: DataTableProps) => {

    const normalizedItems = Array.isArray(items) ? items.slice(0, 5) : Object.values(items).slice(0, 5);

    return (
        <TableContainerCustomers>
      <div className="container-header">
        <h3>{title}</h3>
      </div>
      <TableColumnsCustomers>
        <div className="table-header">

          {titleColumns.map((column: string, index: number) => (
            <div className="columns" key={index}>
              <h5>{column}</h5>
            </div>
          ))}
        </div>
        {normalizedItems.map((item: any, index: number) => (
           <div key={index} className="table-body">
           <div className="rows">
             <div className="user-info">
             <img src={item.image} alt={item.name} />
             <h6>{item.name}</h6>
             </div>
           </div>
           <div className="rows">
             <h6>{item.email}</h6>
           </div>
           <div className="rows">
             <h6>{item.address}</h6>
           </div>
           <div className="rows">
             <h6>{item.phone}</h6>
           </div>
           <div className="rows">
             <h6>{item.register_date}</h6>
           </div>
         </div>
        ))}
      </TableColumnsCustomers>
    </TableContainerCustomers>
  );
};

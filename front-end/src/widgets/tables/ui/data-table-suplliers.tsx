import { TableColumnsSuppliers, TableContainerSuppliers } from "./styles";
import editIcon from "../../../shared/assets/icons/SVG/edit_icon.svg";

interface DataTableProps {
    title: string;
    titleColumns: string[];
    items: any[];
    openModal: (item: any) => void;
}
// TODO: Перенести в pages/all-suppliers/ui/data-table-suppliers/index.tsx
export const DataTableSuppliers = ({title, titleColumns, items, openModal}: DataTableProps) => {

    const normalizedItems = Array.isArray(items) ? items.slice(0, 5) : Object.values(items).slice(0, 5);

    return (
        <TableContainerSuppliers>
      <div className="container-header">
        <h3>{title}</h3>
      </div>
      <TableColumnsSuppliers>
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
             {item.image && <img src={item.image} alt={item.name} />}
             <h6>{item.name}</h6>
             </div>
           </div>
           <div className="rows">
             <h6>{item.address}</h6>
           </div>
           <div className="rows">
             <h6>{item.suppliers}</h6>
           </div>
           <div className="rows">
             <h6>{item.date}</h6>
           </div>
           <div className="rows">
             <h6>{item.amount}</h6>
           </div>
           <div className="rows">
             <h6>{item.status}</h6>
           </div>
           <div className="rows">
            <button className="edit" onClick={() => openModal(item)}>
            <img src={editIcon} alt="edit" className="edit-icon" />
            <h6>Edit</h6>
            </button>
           </div>
         </div>
        ))}
      </TableColumnsSuppliers>
    </TableContainerSuppliers>
  );
};

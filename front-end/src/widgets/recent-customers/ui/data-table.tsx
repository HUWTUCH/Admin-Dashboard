import { TableColumns, TableContainer } from "./styles";

interface DataTableProps {
    title: string;
    titleColumns: string[];
    items: any[];
}

export const DataTable = ({title, titleColumns, items}: DataTableProps) => {

    const normalizedItems = Array.isArray(items) ? items.slice(0, 5) : Object.values(items).slice(0, 5);

    return (
        <TableContainer>
      <div className="container-header">
        <h3>{title}</h3>
      </div>
      <TableColumns>
        <div className="table-header">
          <div className="columns"><h5>{titleColumns[0]}</h5></div>
          <div className="columns"><h5>{titleColumns[1]}</h5></div>
          <div className="columns"><h5>{titleColumns[2]}</h5></div>
          <div className="columns"><h5>{titleColumns[3]}</h5></div>
          <div className="columns"><h5>{titleColumns[4]}</h5></div>
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
      </TableColumns>
    </TableContainer>
  );
};

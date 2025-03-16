import { TableContainer } from "./styles";

interface Column<K> {
  key: K;
  label: string;
  className?: string;
}

type ExtractColumnKeys<T> = T extends Column<infer K> ? K : never;

interface Props<T extends Column<any>[]> {
  columns: T;
  data: Array<
    {
      [K in ExtractColumnKeys<T[number]>]: any;
    } & Record<string, any>
  >;
  headerTitle: string;
}

export const Table = <T extends Column<any>[]>({
  columns,
  data,
  headerTitle,
}: Props<T>) => {
  const columnKeys = columns.map((column) => column.key);

  console.log("data", data);

  return (
    <TableContainer columns={columns.length}>
      <div className="table-header">
        <h3>{headerTitle}</h3>
      </div>
      <div className="table-body">
        {/* Заголовки */}
        <div className="table-body-header">
          {columns.map((column) => (
            <div className="table-body-column" key={String(column.key)}>
              {column.label}
            </div>
          ))}
        </div>

        {/* Дані */}
        {data.slice(0, 5).map((item, index) => (
          <div className="table-body-row" key={index}>
            {columnKeys.map((key) => (
              <div className="table-body-cell" key={`${index}-${String(key)}`}>
                {key === "name" ? ( // Перевіряємо, чи це поле "name"
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item[key]}
                        style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }}
                      />
                    ) : (
                    null
                  )}
                  <h6>{item[key]}</h6>
                  </div>
                ) : (
                  <h6>{item[key]}</h6>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </TableContainer>
  );
};

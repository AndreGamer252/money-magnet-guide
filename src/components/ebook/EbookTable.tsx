interface TableRow {
  [key: string]: string | number;
}

interface EbookTableProps {
  headers: string[];
  rows: TableRow[];
  className?: string;
}

const EbookTable = ({ headers, rows, className = "" }: EbookTableProps) => {
  return (
    <div className={`overflow-x-auto mb-8 ${className}`}>
      <div className="bg-white rounded-2xl shadow-elegant p-6">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left font-inter font-bold text-white first:rounded-l-xl last:rounded-r-xl"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gold/10 transition-colors`}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 font-inter text-foreground border-b border-gray-100 last:border-b-0"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EbookTable;
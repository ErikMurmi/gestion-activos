const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  width: "100%",
};

const thStyle = {
  border: "1px solid black",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  color: "black", // Set text color to black in the header cells
};

const tdStyle = {
  border: "1px solid black",
  padding: "8px",
  color: "black", // Set text color to black in the table cells
};

export default function ModelTable({ model, data }) {
  const columns = Object.keys(model);
  const columnsWithOptions = [...columns, "Opciones"];

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {columnsWithOptions.map((column, index) => (
            <th key={index} style={thStyle}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnsWithOptions.map((column, columnIndex) => (
              <td key={columnIndex} style={tdStyle}>
                {column === "Opciones" ? (
                  <div className="options-container">
                    <button className="editar">Editar</button>
                    <button className="eliminar">Eliminar</button>
                  </div>
                ) : (
                  row[column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { deleteItem } from "controllers/modelosController";
import Router from "next/router";

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

export default function ModelTable({ model, data, modelName = "" }) {
  const columns = Object.keys(model);
  const columnsWithOptions = [...columns, "Opciones"];
  //console.log("data received: ", data);

  async function handleDelete(id) {
    const deleted = await deleteItem(modelName, id);
    if (deleted) {
      alert("Se elimino correctamente el item");
      Router.reload();
    } else {
      alert("Hubo un error al eliminar el item");
    }
  }

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
                    <button
                      className="eliminar"
                      onClick={() => handleDelete(row.id)}
                    >
                      Eliminar
                    </button>
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

import { addItem } from "controllers/modelosController";
import { useState } from "react";
import { getItems } from "controllers/modelosController";

const modelName = "controles";
const Control = {
  Control: "",
  Contexto: "",
  Discusion: "",
  Categoria: "",
  Riesgo: "",
};

const opcionesCategoria = [
  "Control de Acceso",
  "Seguridad de Red",
  "Respaldos",
  "Auditorías",
];

export default function CrearControl({ riesgos }) {
  const [formulario, setFormulario] = useState(Control);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a la base de datos o realizar cualquier otra acción.
    //console.log(formulario);
    const creado = await addItem(formulario, modelName);
    let msg = "No se pudo crear el item";
    if (creado) {
      // Restablecer el formulario después de enviar los datos
      setFormulario(Control);
      msg = "Se creo el item correctamente";
    }
    alert(msg);
  };

  return (
    <div>
      <h1>Crear Control</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Control:</label>
          <input
            type="text"
            name="Control"
            value={formulario.Control}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contexto:</label>
          <input
            type="text"
            name="Contexto"
            value={formulario.Contexto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Discusion:</label>
          <input
            type="text"
            name="Discusion"
            value={formulario.Discusion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Categoria:</label>
          <select
            name="Categoria"
            value={formulario.Categoria}
            onChange={handleChange}
          >
            <option value="">Selecciona una Categoria</option>
            {opcionesCategoria.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Riesgo:</label>
          <select
            name="Riesgo"
            value={formulario.Riesgo}
            onChange={handleChange}
          >
            <option value="">Selecciona un Riesgo</option>
            {riesgos.map((riesgo) => (
              <option key={riesgo.Nombre} value={riesgo.Nombre}>
                {riesgo.Nombre}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Crear Control
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = async () => {
  const riesgos = await getItems("riesgos");
  return {
    props: {
      riesgos: riesgos,
    },
  };
};

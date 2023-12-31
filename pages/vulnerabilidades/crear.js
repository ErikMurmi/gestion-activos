import { useState } from "react";
import { addItem } from "controllers/modelosController";
import { getItems } from "controllers/modelosController";

const modelName = "vulnerabilidades";
const Vulnerabilidad = {
  Vulnerabilidad: "",
  Descripción: "",
  Categoría: "",
  Clasificación: "",
  Valor: "",
};

const opcionesCategoria = [
  "Software",
  "Seguridad de la información",
  "Infraestructura física",
  "Respaldos",
  "Seguridad de la información",
  "Redes",
];

const opcionesClasificacion = ["Alta", "Media", "Baja"];

const opcionesValor = ["Alto", "Moderado", "Bajo"];

export default function CrearVulnerabilidad({ riesgos }) {
  const [formulario, setFormulario] = useState(Vulnerabilidad);

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
      setFormulario(Vulnerabilidad);
      msg = "Se creo el item correctamente";
    }
    alert(msg);
  };

  return (
    <div>
      <h1>Crear Vulnerabilidad</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="Vulnerabilidad"
            value={formulario.Vulnerabilidad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="Descripción"
            value={formulario.Descripción}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <select
            name="Categoría"
            value={formulario.Categoría}
            onChange={handleChange}
          >
            <option value="">Selecciona una Categoría</option>
            {opcionesCategoria.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Clasificación:</label>
          <select
            name="Clasificación"
            value={formulario.Clasificación}
            onChange={handleChange}
          >
            <option value="">Selecciona una Clasificación</option>
            {opcionesClasificacion.map((clasificacion, index) => (
              <option key={index} value={clasificacion}>
                {clasificacion}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Valor:</label>
          <select name="Valor" value={formulario.Valor} onChange={handleChange}>
            <option value="">Selecciona un Valor</option>
            {opcionesValor.map((valor, index) => (
              <option key={index} value={valor}>
                {valor}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Crear Vulnerabilidad
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

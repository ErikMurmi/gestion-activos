import { addItem } from "controllers/modelosController";
import { useState } from "react";
import { getItems } from "controllers/modelosController";

const modelName = "riesgos";
const Riesgo = {
  Nombre: "",
  Amenaza: "",
  Vulnerabilidad: "",
  Control: "",
  Impacto: "",
  Probabilidad: "",
};

const opcionesImpacto = ["1", "2", "3", "4", "5"];
const opcionesProbabilidad = ["Baja", "Media", "Alta"];

export default function CrearRiesgo({ amenazas, vulnerabilidades, controles }) {
  const [formulario, setFormulario] = useState(Riesgo);

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
      setFormulario(Riesgo);
      msg = "Se creo el item correctamente";
    }
    alert(msg);
  };

  return (
    <div>
      <h1>Crear Riesgo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={formulario.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Amenaza:</label>
          <select
            name="Amenaza"
            value={formulario.Amenaza}
            onChange={handleChange}
          >
            <option value="">Selecciona una Amenaza</option>
            {amenazas.map((amenaza) => (
              <option key={amenaza.Amenaza} value={amenaza.Amenaza}>
                {amenaza.Amenaza}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Vulnerabilidad:</label>
          <select
            name="Vulnerabilidad"
            value={formulario.Vulnerabilidad}
            onChange={handleChange}
          >
            <option value="">Selecciona una Vulnerabilidad</option>
            {vulnerabilidades.map((vulnerabilidad) => (
              <option
                key={vulnerabilidad.Vulnerabilidad}
                value={vulnerabilidad.Vulnerabilidad}
              >
                {vulnerabilidad.Vulnerabilidad}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Control:</label>
          <select
            name="Control"
            value={formulario.Control}
            onChange={handleChange}
          >
            <option value="">Selecciona un Control</option>
            {controles.map((control) => (
              <option key={control.Nombre} value={control.Nombre}>
                {control.Nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Impacto:</label>
          <select
            name="Impacto"
            value={formulario.Impacto}
            onChange={handleChange}
          >
            <option value="">Selecciona un Impacto</option>
            {opcionesImpacto.map((impacto, index) => (
              <option key={index} value={impacto}>
                {impacto}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Probabilidad:</label>
          <select
            name="Probabilidad"
            value={formulario.Probabilidad}
            onChange={handleChange}
          >
            <option value="">Selecciona una Probabilidad</option>
            {opcionesProbabilidad.map((probabilidad, index) => (
              <option key={index} value={probabilidad}>
                {probabilidad}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Crear Riesgo
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = async () => {
  const amenazas = await getItems("amenazas");
  const vulnerabilidades = await getItems("vulnerabilidades");
  const controles = await getItems("controles");
  return {
    props: {
      amenazas: amenazas,
      vulnerabilidades: vulnerabilidades,
      controles: controles,
    },
  };
};

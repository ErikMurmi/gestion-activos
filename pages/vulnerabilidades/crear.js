import { useState } from "react";
import { addItem } from "controllers/modelosController";

const modelName = "vulnerabilidades";
const Vulnerabilidad = {
  Nombre: "",
  Descripción: "",
  Categoría: "",
  Riesgo: "",
};

const opcionesCategoria = [
  "Hardware",
  "Software",
  "Clima",
  "Social",
  "Ambiental",
];
const opcionesRiesgo = [
  "Fugas de información",
  "Ataques de fuerza bruta",
  "Explotación de vulnerabilidades",
];

export default function CrearVulnerabilidad() {
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
      setFormulario(Activo);
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
            name="Nombre"
            value={formulario.Nombre}
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
          <label>Riesgo:</label>
          <select
            name="Riesgo"
            value={formulario.Riesgo}
            onChange={handleChange}
          >
            <option value="">Selecciona un Riesgo</option>
            {opcionesRiesgo.map((riesgo, index) => (
              <option key={index} value={riesgo}>
                {riesgo}
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

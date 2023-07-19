import { useState } from "react";
import { addItem } from "controllers/modelosController";
const modelName = "amenazas";

const Amenaza = {
  Origen: "",
  Categoría: "",
  Amenaza: "",
  Valor: "",
  Descripción: "",
};

const opcionesOrigen = [
  "Error Humano",
  "Naturaleza",
  "Tecnología",
  "Acciones Maliciosas",
];
const opcionesCategoria = [
  "Hardware",
  "Software",
  "Clima",
  "Social",
  "Ambiental",
];
const opcionesValor = ["Baja", "Media", "Alta"];

export default function CrearAmenaza() {
  const [formulario, setFormulario] = useState(Amenaza);

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
      <h1>Crear Amenaza</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Origen:</label>
          <select
            name="Origen"
            value={formulario.Origen}
            onChange={handleChange}
          >
            <option value="">Selecciona un Origen</option>
            {opcionesOrigen.map((origen, index) => (
              <option key={index} value={origen}>
                {origen}
              </option>
            ))}
          </select>
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
          <label>Amenaza:</label>
          <input
            type="text"
            name="Amenaza"
            value={formulario.Amenaza}
            onChange={handleChange}
          />
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
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="Descripción"
            value={formulario.Descripción}
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn" type="submit">
          Crear Amenaza
        </button>
      </form>
    </div>
  );
}

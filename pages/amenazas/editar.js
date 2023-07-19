import { useState, useEffect } from "react";
import { updateItem } from "controllers/modelosController";
import { useRouter } from "next/router";
import { getItem } from "controllers/modelosController";

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
  "Desastre Natural",
  "Ataque interno",
  "Ataque externo",
  "Tecnología",
  "Acciones Maliciosas",
];
const opcionesCategoria = [
  "Software",
  "Seguridad de la información",
  "Infraestructura física",
  "Respaldos",
  "Seguridad de la información",
  "Redes",
];

const opcionesValor = ["Alto", "Moderado", "Bajo"];

export default function EditarAmenaza() {
  const [formulario, setFormulario] = useState(Amenaza);
  const router = useRouter(); // Obtener el router
  const { id } = router.query; // Obtener el id de la URL

  useEffect(() => {
    if (id) {
      const obtenerItem = async () => {
        try {
          const item = await getItem(modelName, id);
          setFormulario(item);
        } catch (error) {
          console.error("Error al obtener el item:", error);
        }
      };

      obtenerItem();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a la base de datos o realizar cualquier otra acción.
    //console.log(formulario);
    const actualizado = await updateItem(formulario, modelName, id);
    let msg = "No se pudo crear el item";
    if (actualizado) {
      // Restablecer el formulario después de enviar los datos
      setFormulario(Amenaza);
      msg = "Se creo el item correctamente";
      alert(msg);
      router.replace(`/${modelName}`);
    }
  };

  return (
    <div>
      <h1>Editar Amenaza</h1>
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
          Editar Amenaza
        </button>
      </form>
    </div>
  );
}

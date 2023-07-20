import { useState } from "react";
import { addItem } from "controllers/modelosController";
import { getItems } from "controllers/modelosController";
const modelName = "activos";

const Activo = {
  Ubicacion: "",
  Departamento: "",
  Clasificacion: "",
  Nombre: "",
  Responsable: "",
  Vulnerabilidades: [],
};

const opcionesClasificacion = [
  "Activo Crítico",
  "Activo Importante",
  "Activo de Apoyo",
  "Activo Menor",
  "Activo de Prueba",
];

const opcionesDepartamento = [
  "Dirección",
  "Recursos Humanos",
  "Finanzas",
  "Tecnología de la Información",
  "Operaciones",
  "Ventas",
  "Marketing",
];

export default function CrearActivo({ vulnerabilidades }) {
  const [formulario, setFormulario] = useState(Activo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleVulnerabilidadesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormulario({
        ...formulario,
        Vulnerabilidades: [...formulario.Vulnerabilidades, value],
      });
    } else {
      setFormulario({
        ...formulario,
        Vulnerabilidades: formulario.Vulnerabilidades.filter(
          (v) => v !== value
        ),
      });
    }
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
      <h1>Crear Activo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ubicación:</label>
          <input
            type="text"
            name="Ubicacion"
            value={formulario.Ubicacion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Departamento:</label>
          <select
            name="Departamento"
            value={formulario.Departamento}
            onChange={handleChange}
          >
            <option value="">Selecciona un Departamento</option>
            {opcionesDepartamento.map((departamento, index) => (
              <option key={index} value={departamento}>
                {departamento}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Clasificación:</label>
          <select
            name="Clasificacion"
            value={formulario.Clasificacion}
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
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={formulario.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsable:</label>
          <input
            type="text"
            name="Responsable"
            value={formulario.Responsable}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vulnerabilidades:</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {vulnerabilidades.map((vulnerabilidad) => (
              <label key={vulnerabilidad.Nombre}>
                <input
                  type="checkbox"
                  name="Vulnerabilidades"
                  value={vulnerabilidad.Vulnerabilidad}
                  checked={formulario.Vulnerabilidades.includes(
                    vulnerabilidad.Vulnerabilidad
                  )}
                  onChange={handleVulnerabilidadesChange}
                />
                {vulnerabilidad.Vulnerabilidad}
              </label>
            ))}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Crear Activo
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = async () => {
  const vulnerabilidades = await getItems("vulnerabilidades");
  return {
    props: {
      vulnerabilidades: vulnerabilidades,
    },
  };
};

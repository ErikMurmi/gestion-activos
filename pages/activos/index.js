import { Activo } from "../../models/Activo";
import ModelTable from "../../components/ModelTable";

export default function Activos() {
  const activos = [
    {
      Ubicacion: "Oficina",
      Departamento: "TI",
      Clasificacion: "Elemento Prioritario",
      Nombre: "Laptop",
      Responsable: "Luis Perez",
    },
  ];
  return (
    <>
      <h1>Tabla de Activos</h1>
      <button className="button" id="agregar">
        Agregar
      </button>
      <ModelTable model={Activo} data={activos} />
    </>
  );
}

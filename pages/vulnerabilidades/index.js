import { Vulnerabilidad } from "../../models/Vulnerabilidad";
import ModelTable from "../../components/ModelTable";

export default function Vulnerabilidades() {
  const vulnerabilidades = [
    {
      Nombre: "Base de datos",
      Descripción: "Almacena información",
      Categoría: "Software",
      Clasificacion: "Confidencial",
      Valor: "10,000 USD",
    },
  ];
  return (
    <>
      <h1>Tabla de Vulnerabilidades</h1>
      <button className="button" id="agregar">
        Agregar
      </button>
      <ModelTable model={Vulnerabilidad} data={vulnerabilidades} />
    </>
  );
}

import { Riesgo } from "../../models/Riesgo"; // Importa el modelo Riesgo
import ModelTable from "../../components/ModelTable";

export default function Riesgos() {
  const riesgos = [
    {
      Amenaza: "Virus",
      Vulnerabilidad: "Base de datos",
      Control: "Antivirus",
      Impacto: "3",
      Probabilidad: "2",
    },
    // Agrega más objetos riesgo aquí...
  ];

  return (
    <>
      <h1>Tabla de Riesgos</h1>
      <button className="button" id="agregar">
        Agregar
      </button>
      <ModelTable model={Riesgo} data={riesgos} />
    </>
  );
}

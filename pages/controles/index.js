import { Control } from "../../models/Control"; // Importa el modelo Control
import ModelTable from "../../components/ModelTable";

export default function Controles() {
  const controles = [
    {
      Control: "Antivirus",
      Contexto: "Protección contra malware",
      Discusion: "Uso de antivirus actualizado en todos los dispositivos",
      Categoria: "Seguridad Informática",
      Riesgo: "Virus",
    },
    // Agrega más objetos control aquí...
  ];

  return (
    <>
      <h1>Tabla de Controles</h1>
      <button className="button" id="agregar">
        Agregar
      </button>
      <ModelTable model={Control} data={controles} />
    </>
  );
}

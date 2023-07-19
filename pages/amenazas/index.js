import { Amenaza } from "../../models/Amenaza";
import ModelTable from "../../components/ModelTable";

export default function Amenazas() {
  const amenzas = [
    {
      Origen: "Error Humano",
      Categoría: "Hardware",
      Amenaza: "Avería Física",
      Valor: "Media",
      Descripción: "Mala Instalación del componente",
    },
  ];
  return (
    <>
      <h1>Tabla de Amenazas</h1>
      <button className="button" id="agregar">
        Agregar
      </button>
      <ModelTable model={Amenaza} data={amenzas} />
    </>
  );
}

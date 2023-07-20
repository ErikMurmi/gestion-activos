import { useState, useEffect } from "react";
import { Activo } from "../../models/Activo";
import ModelTable from "../../components/ModelTable";
//import { getItems } from "../../controllers/modelosController";
import { getItemsList } from "pages/api/models/getItemsList";
import { useRouter } from "next/router";
const modelName = "activos";

export default function Activos() {
  const [activos, setActivos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchActivos() {
      const activosData = await getItemsList(modelName);
      setActivos(activosData);
    }

    fetchActivos();
  }, []);

  function handleEdit(id) {
    router.push(`${modelName}/editar?id=${id}`);
  }

  return (
    <>
      <h1>Tabla de Activos</h1>
      <button
        className="button"
        id="agregar"
        onClick={() => router.push(`${modelName}/crear`)}
      >
        Agregar
      </button>
      <ModelTable
        model={Activo}
        data={activos}
        modelName={modelName}
        editFun={handleEdit}
      />
    </>
  );
}

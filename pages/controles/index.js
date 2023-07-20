import { Control } from "../../models/Control"; // Importa el modelo Control
import ModelTable from "../../components/ModelTable";
import { getItems } from "controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "controles";

export default function Controles({ controles }) {
  const router = useRouter();
  function handleEdit(id) {
    router.push(`${modelName}/editar?id=${id}`);
  }
  return (
    <>
      <h1>Tabla de Controles</h1>
      <button
        className="button"
        id="agregar"
        onClick={() => router.push(`${modelName}/crear`)}
      >
        Agregar
      </button>
      <ModelTable
        model={Control}
        data={controles}
        modelName={modelName}
        editFun={handleEdit}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const controles = await getItems(modelName);
  return {
    props: {
      controles: controles,
    },
  };
};

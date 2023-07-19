import { Activo } from "../../models/Activo";
import ModelTable from "../../components/ModelTable";
import { getItems } from "../../controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "activos";

export default function Activos({ activos }) {
  const router = useRouter();
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

export const getServerSideProps = async () => {
  const activos = await getItems(modelName);
  return {
    props: {
      activos: activos,
    },
  };
};

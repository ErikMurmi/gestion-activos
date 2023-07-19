import { Vulnerabilidad } from "../../models/Vulnerabilidad";
import ModelTable from "../../components/ModelTable";
import { getItems } from "controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "vulnerabilidades";
export default function Vulnerabilidades({ vulnerabilidades }) {
  const router = useRouter();

  function handleEdit(id) {
    router.push(`${modelName}/editar?id=${id}`);
  }

  return (
    <>
      <h1>Tabla de Vulnerabilidades</h1>
      <button
        className="button"
        id="agregar"
        onClick={() => router.push(`${modelName}/crear`)}
      >
        Agregar
      </button>
      <ModelTable
        model={Vulnerabilidad}
        data={vulnerabilidades}
        modelName={modelName}
        editFun={handleEdit}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const vulnerabilidades = await getItems(modelName);
  return {
    props: {
      vulnerabilidades: vulnerabilidades,
    },
  };
};

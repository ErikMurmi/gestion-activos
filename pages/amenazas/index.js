import { Amenaza } from "../../models/Amenaza";
import ModelTable from "../../components/ModelTable";
import { getItems } from "controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "amenazas";

export default function Amenazas({ amenazas }) {
  const router = useRouter();

  function handleEdit(id) {
    router.push(`${modelName}/editar?id=${id}`);
  }

  return (
    <>
      <h1>Tabla de Amenazas</h1>
      <button
        className="button"
        id="agregar"
        onClick={() => router.push(`${modelName}/crear`)}
      >
        Agregar
      </button>
      <ModelTable
        model={Amenaza}
        data={amenazas}
        modelName={modelName}
        editFun={handleEdit}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const amenazas = await getItems(modelName);
  return {
    props: {
      amenazas: amenazas,
    },
  };
};

import { Riesgo } from "../../models/Riesgo"; // Importa el modelo Riesgo
import ModelTable from "../../components/ModelTable";
import { getItems } from "controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "riesgos";

export default function Riesgos({ riesgos }) {
  // const riesgos = [
  //   {
  //     Amenaza: "Virus",
  //     Vulnerabilidad: "Base de datos",
  //     Control: "Antivirus",
  //     Impacto: "3",
  //     Probabilidad: "2",
  //   },
  //   // Agrega más objetos riesgo aquí...
  // ];

  const router = useRouter();
  function handleEdit(id) {
    router.push(`${modelName}/editar?id=${id}`);
  }

  return (
    <>
      <h1>Tabla de Riesgos</h1>
      <button
        className="button"
        id="agregar"
        onClick={() => router.push(`${modelName}/crear`)}
      >
        Agregar
      </button>
      <ModelTable
        model={Riesgo}
        data={riesgos}
        modelName={modelName}
        editFun={handleEdit}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const riesgos = await getItems(modelName);
  return {
    props: {
      riesgos: riesgos,
    },
  };
};

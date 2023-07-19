import { Amenaza } from "../../models/Amenaza";
import ModelTable from "../../components/ModelTable";
import { getItems } from "controllers/modelosController";
import { useRouter } from "next/router";
const modelName = "amenazas";

export default function Amenazas({ amenazas }) {
  // const amenzas = [
  //   {
  //     Origen: "Error Humano",
  //     Categoría: "Hardware",
  //     Amenaza: "Avería Física",
  //     Valor: "Media",
  //     Descripción: "Mala Instalación del componente",
  //   },
  // ];
  const router = useRouter();
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
      <ModelTable model={Amenaza} data={amenazas} />
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

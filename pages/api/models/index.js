import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../config/client";
export default async function handler(req, res) {
  const { method, body } = req;
  const { modelname } = req.query;
  switch (method) {
    case "GET":
      const querySnapshot = await getDocs(collection(db, modelname));
      const sol = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      return res.status(200).json(sol);
    case "POST":
      console.log("body ", body);
      const result = await addDoc(collection(db, body.model), body.data);
      console.log(result);
      return res.status(200).json(result);
    default:
      return res.status(400).json({
        msg: "This method does not exits",
      });
  }
}

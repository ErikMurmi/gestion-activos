import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../../config/client";
export default async function handler(req, res) {
  const { method, body } = req;
  const { modelname, id } = req.query;
  let querySnapshot = null;
  let resData = null;
  switch (method) {
    case "GET":
      querySnapshot = await getDocs(collection(db, modelname));
      resData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      return res.status(200).json(resData);
    case "POST":
      console.log("body ", body);
      const result = await addDoc(collection(db, body.model), body.data);
      console.log(result);
      return res.status(200).json(result);
    case "DELETE":
      try {
        const result = await deleteDoc(doc(db, modelname, id));
        return res.status(204).json(result);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({
        msg: "This method does not exits",
      });
  }
}

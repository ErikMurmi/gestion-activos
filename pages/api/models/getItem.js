import { doc, getDoc } from "firebase/firestore";
import { db } from "config/client";

export default async function getItem(req, res) {
  //console.log('query :' ,req)
  try {
    const { modelname, id } = req.query;

    const docRef = doc(db, modelname, id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const id = docSnapshot.id;
      const resData = { id, ...data };
      return res.status(200).json(resData);
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
}

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "config/client";

export default async function updateItem(req, res) {
  try {
    const { modelname, id } = req.query;

    const docRef = doc(db, modelname, id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      // Update the document using the data from the request body
      const dataToUpdate = req.body; // Assuming the request body contains the updated data
      await updateDoc(docRef, dataToUpdate);

      // Fetch the updated document and return it in the response
      const updatedDocSnapshot = await getDoc(docRef);
      const updatedData = updatedDocSnapshot.data();
      const updatedId = updatedDocSnapshot.id;
      const resData = { id: updatedId, ...updatedData };
      return res.status(200).json(resData);
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
}

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../../config/client";
export async function getItemsList(modelname) {
  const querySnapshot = await getDocs(collection(db, modelname));
  const resData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { id, ...data };
  });
  return resData;
}

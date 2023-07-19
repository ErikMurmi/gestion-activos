export const addItem = async (newItem, modelName) => {
  try {
    const res = await fetch(`http://localhost:3000/api/models`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: modelName, data: newItem }),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getItems = async (modelName) => {
  const res = await fetch(
    `http://localhost:3000/api/models?modelname=${modelName}`
  );
  const data = await res.json();
  return data;
};

// export const deleteAlbum = async (id)=>{
//     try{
//         const res = await fetch(`${service_url}/albums/`+id,{
//             method:'DELETE'
//         })
//         return res
//     }catch(error){
//         console.log(error)
//     }
// }

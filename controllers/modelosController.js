// const api_url = "https://gestion-activos.vercel.app/api";
const api_url = "http://localhost:3000/api";
export const addItem = async (newItem, modelName) => {
  try {
    const res = await fetch(`${api_url}/models`, {
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

export const updateItem = async (updatedItem, modelName, docId) => {
  try {
    const res = await fetch(
      `${api_url}/models/updateItem?modelname=${modelName}&id=${docId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      }
    );

    return true;
  } catch (error) {
    return false;
  }
};

export const getItems = async (modelName) => {
  const res = await fetch(`${api_url}/models?modelname=${modelName}`);
  const data = await res.json();
  return data;
};

export const getItem = async (modelName, docId) => {
  const res = await fetch(
    `${api_url}/models/getItem?modelname=${modelName}&id=${docId}`
  );
  const data = await res.json();
  return data;
};

export const deleteItem = async (modelName, docId) => {
  try {
    const res = await fetch(
      `${api_url}/models?modelname=${modelName}&id=${docId}`,
      {
        method: "DELETE",
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};

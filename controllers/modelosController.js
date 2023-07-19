const api_url = process.env.NEXT_PUBLIC_API_URL;
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

export const getItems = async (modelName) => {
  const res = await fetch(`${api_url}/models?modelname=${modelName}`);
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

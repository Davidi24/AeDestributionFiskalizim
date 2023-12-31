import api from "../../../api/axiousConfig";

let data = [];

export async function getTableInfo(id) {
  if (!retrievedataFromCache(id)) {
    data = await retriveDataFromServer(id);
    return data;
  }
}

async function retriveDataFromServer(id) {
  try {
    const response = await api.get(`getFaturat?vatNumber=${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function retrievedataFromCache(id) {
  return false;
}

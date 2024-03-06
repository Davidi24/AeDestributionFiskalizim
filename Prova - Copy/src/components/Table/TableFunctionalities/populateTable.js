import api from "../../../api/axiousConfig";

let data = [];
let cache = {};
let page;
let size;
let tempData = [];
let haveRetriveDataFromTheServer = false;

/*it get 3 parame id(vatnumber) page whene it has to look in db(?) and size how much data
  a time should retrive. It checks if it is in the cache if not it goes to the server and 
  take them. */
export async function getTableInfo(id, p, s) {
  page = p;
  size = s;
  if (!retrievedataFromCache(id)) {
    data = await retriveDataFromServer(id, page, size);
    return data;
  } else {
    return retriveDataFromTheCache(id);
  }
}

/*it has three maining things. If it gets the data it send in the front normaly. If it
  has finish retriving data it will return smth like undifined or emty or null and then
  it will check if has retrive any data from the server with that id, if yes it tell to
  return a string == 1 to tell the front do not delete the data that you have in the 
  screen. If no then it return 2 to and the front knows that with this id it has no data
  in the database
  */
async function retriveDataFromServer(id, page, pageSize) {
  try {
    const response = await api.get(
      `/getFaturat?vatNumber=${id}&page=${page}&size=${pageSize}`
    );

    if (
      response.data.content !== undefined &&
      Array.isArray(response.data.content) &&
      response.data.content.length !== 0
    ) {
      haveRetriveDataFromTheServer = true;
      tempData.push(...response.data.content);
      return response.data.content;
    } else {
      putDataInCache(id, tempData);
      tempData = [];
      if (haveRetriveDataFromTheServer) {
        haveRetriveDataFromTheServer = false;
        return "1";
      }
      return "2";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function retrievedataFromCache(id) {
  return cache.hasOwnProperty(id);
}

function putDataInCache(id, data) {
  cache[id] = data;
}

function retriveDataFromTheCache(id) {
  return { data: cache[id] };
}

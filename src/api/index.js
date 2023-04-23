const BASE_URL = "http://localhost:3000";

export const todoAPI = {
  fetchAll: () => fetch(`${BASE_URL}/todos`).then((res) => res.json()),
  updateOne: ({ id, todo }) => {
    // TODO: return a fetch call to an appropriate API route to update todo
    // TIP: MAKE SURE to include "Content-Type" header with the value of "application/json"
    // also don't forget that the body should contain JSON-formatted data
  },
  createOne: (todo) => {
     // TODO: return a fetch call to an appropriate API route to create todo
     // TIP: MAKE SURE to include "Content-Type" header with the value of "application/json"
     // also don't forget that the body should contain JSON-formatted data
     // and finally - don't forget to parse the API response by calling res.json()
  },
  deleteOne: (id) => {
     // TODO: return a fetch call to an appropriate API route to delete todo
  },
};

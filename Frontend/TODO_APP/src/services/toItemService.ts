import axios from "axios";

const apiUrl = 'https://localhost:7272/api/';

export const createTask = async (title: string, description: string, priority: number) => {
    return axios.post( apiUrl + "toDoItem/create", {
      title: title,
      description: description,
      priority: priority
    })
    .then(() => {
        console.log("Task created");
    })
    .catch((error) => {
      console.error("Error when creating toDoItem", error);
    });
  };

  export const getAllTask = async ()=> {
    return axios.get( apiUrl + "toDoItem")
    .then((result) => {
        console.log("All tasks == >", result.data);
        return {data: result.data, code: 200};
    })
    .catch((error) => {
      console.error("Error when getting all toDoItem",error);
      return {data: error.response.message, code: error.response.status};
    });
  };

  export const updateTask = async (id: number, title: string, description: string, priority: number) => {
    return axios.post( apiUrl + "toDoItem/update", {
      id: id,
      title: title,
      description: description,
      priority: priority
    })
    .then((result) => {
        console.log("Task updated ==> ", result);
    })
    .catch((error) => {
      console.error("Error when updating toDoItem", error);
    });
  };

  export const deleteTask = async (id: number) => {
    return axios.post( apiUrl + "toDoItem/delete/" + id)
    .then(() => {
        console.log("Task deleted");
        return {data: null, code: 200}
    })
    .catch((error) => {
      console.error("Error when deleting toDoItem", error);
      return {data: error.response.message, code: error.response.status}
    });
  };


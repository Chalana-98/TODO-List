import { TaskItem } from './../models/taskItem';
import axios from "axios";

const apiUrl = 'https://localhost:7272/api/';

export const createTask = async (title: string, description: string, priority: number, isCompleted: boolean) => {
    return axios.post( apiUrl + "toDoItem/create", {
      title: title,
      description: description,
      priority: priority,
      isCompleted: isCompleted
    })
    .then((result) => {
      return {data: null, code: result.status};
    })
    .catch((error) => {
      console.error("Error when creating toDoItem", error);
    });
  };

  export const getAllTask = async ()=> {
    return axios.get( apiUrl + "toDoItem")
    .then((result) => {
        const items : TaskItem[] = result.data;
        return {data: items, code: 200};
    })
    .catch((error) => {
      return {data: error.response.message, code: error.response.status};
    });
  };

  export const updateTask = async (id: number, title: string, description: string, priority: number,  isCompleted: boolean) => {
    return axios.post( apiUrl + "toDoItem/update", {
      id: id,
      title: title,
      description: description,
      priority: priority,
      isCompleted: isCompleted
    })
    .then((result) => {
      return {data: result.data, code: result.status};
    })
    .catch((error) => {
      return {data: null, code: error.response.status};
    });
  };

  export const deleteTask = async (id: number) => {
    return axios.post( apiUrl + "toDoItem/delete/" + id)
    .then((result) => {
        return {data: null, code: result.status}
    })
    .catch((error) => {
      return {data: error.response.message, code: error.response.status}
    });
  };


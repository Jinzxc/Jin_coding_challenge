import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(`${apiUrl}/create`, { task });
}
export function updateTask(originTask, task) {
  return axios.put(`${apiUrl}/update/${originTask._id}`, { task });
}

export function deleteTask(task) {
  return axios.delete(`${apiUrl}/delete/${task._id}`);
}

export function deleteAllTask() {
  return axios.delete(`${apiUrl}/delete`);
}

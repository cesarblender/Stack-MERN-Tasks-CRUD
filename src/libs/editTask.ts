import { task } from "../tasks";
import { Put } from "./http";

const EditTask = (
  backendUrl: string,
  title: string,
  description: string,
  setTitle: Function,
  setDescription: Function,
  setEditMode: Function,
  getTasks: Function
) => {
  return async (id: string) => {
    await Put<task>(backendUrl + id, {
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setEditMode(false);

    getTasks();
  };
};

export default EditTask;

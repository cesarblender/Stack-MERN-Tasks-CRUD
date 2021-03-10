import { task } from "../tasks";
import { Post } from "./http";

const CreateTask = (
  backendUrl: string,
  title: string,
  description: string,
  setTitle: Function,
  setDescription: Function,
  getTasks: Function
) => {
  return async () => {
    await Post<task>(backendUrl, {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    getTasks();
  };
};

export default CreateTask;

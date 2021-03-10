import { Delete } from "./http";

const DeleteTask = (backendUrl: string, getTasks: Function) => {
  return async (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    const isSure = confirm("Are you sure that you want to delete this task?");

    if (isSure) {
      await Delete(backendUrl + id);

      getTasks();
    }
  };
};

export default DeleteTask;

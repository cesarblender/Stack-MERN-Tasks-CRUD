import { Get } from "./http";

const GetTasks = (backendUrl: string, setTasks: Function) => {
  return async () => {
    const tsk: any = await Get(backendUrl);

    const jsonTasks = await tsk.json();

    setTasks(jsonTasks);
  };
};

export default GetTasks;

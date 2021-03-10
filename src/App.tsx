/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Get, Post, Put, Delete } from "./libs/http";
import { task } from "./tasks";
import Task from "./components/Task";
import CreateOrEditTask from "./components/CreateOrEditTask";
import Appbar from "./components/AppBar";
import CreateTask from "./libs/createTask";
import GetTasks from "./libs/getTasks";
import EditTask from "./libs/editTask";
import DeleteTask from "./libs/deleteTask";

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");
  const backendUrl = "http://tasky-tasks.herokuapp.com/tasks/";

  const getTasks = GetTasks(backendUrl, setTasks);

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = CreateTask(
    backendUrl,
    title,
    description,
    setTitle,
    setDescription,
    getTasks
  );

  const editTask = EditTask(
    backendUrl,
    title,
    description,
    setTitle,
    setDescription,
    setEditMode,
    getTasks
  );

  const deleteTask = DeleteTask(backendUrl, getTasks);

  return (
    <div>
      <Appbar />
      <CreateOrEditTask
        {...{
          editMode,
          title,
          description,
          setTitle,
          setDescription,
          editTask,
          createTask,
          id,
        }}
      />
      <br />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {tasks.map(({ title, description, _id }, i) => (
          <Task
            {...{
              title,
              description,
              _id,
              deleteTask,
              setEditMode,
              setTitle,
              setDescription,
              setId,
              key: i,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

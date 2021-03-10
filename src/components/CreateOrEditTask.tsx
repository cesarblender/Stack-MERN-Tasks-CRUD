import {
  Button,
  CardContent,
  Card,
  TextField,
  Typography,
} from "@material-ui/core";

function CreateOrEditTask({
  editMode,
  title,
  description,
  setTitle,
  setDescription,
  editTask,
  createTask,
  id,
}: {
  editMode: boolean,
  title: string,
  description: string,
  setTitle: Function,
  setDescription: Function,
  editTask: Function,
  createTask: Function,
  id: string,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          maxWidth: "60%",
          minWidth: 360,
          borderRadius: 15,
          textAlign: "center",
          background: "whitesmoke",
        }}
      >
        <CardContent>
          <Typography variant="h4" color="initial">
            {editMode ? "Edit a task" : "Create a task"}
          </Typography>
          <TextField
            label="Title"
            value={title}
            variant="filled"
            style={{ width: "100%" }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            label="Description"
            value={description}
            variant="filled"
            style={{ width: "100%" }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            onClick={() => {
              if (editMode) {
                editTask(id);
              } else {
                createTask();
              }
            }}
          >
            {editMode ? "Edit Task" : "Create Task"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateOrEditTask;

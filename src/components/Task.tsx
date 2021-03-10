import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function Task({
  title,
  description,
  _id,
  deleteTask,
  setEditMode,
  setTitle,
  setDescription,
  setId,
}: {
  title: string;
  description: string;
  _id?: string;
  deleteTask: Function;
  setEditMode: Function;
  setTitle: Function;
  setDescription: Function;
  setId: Function;
}) {
  return (
    <div>
      <Card
        style={{
          width: 300,
          background: "#212121",
          color: "white",
          borderRadius: 15,
          margin: 10,
        }}
      >
        <CardContent>
          <Typography variant="h4" color="initial">
            {title}
          </Typography>
          <Typography variant="body1" color="initial">
            {description}
          </Typography>
          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            color="secondary"
            variant="contained"
            onClick={() => deleteTask(_id || "")}
          >
            DELETE
          </Button>
          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            color="primary"
            variant="contained"
            onClick={() => {
              setEditMode(true);
              setId(_id || "");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
              });
              setTitle(title);
              setDescription(description);
            }}
          >
            EDIT
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Task;

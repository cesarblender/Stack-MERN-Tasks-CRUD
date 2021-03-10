import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Appbar() {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">STACK MERN TASKS</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Appbar;

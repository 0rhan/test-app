import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Controls from "./Controls/Controls";

function TopBar(props) {
  return(
    <AppBar color = "primary">
      <Toolbar>
        <Controls/>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;
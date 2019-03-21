import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Done from "@material-ui/icons/Done";

function DoneButton(props) {
  return (
    <IconButton disableRipple>
      <Done />
    </IconButton>
  );
}

export default DoneButton;

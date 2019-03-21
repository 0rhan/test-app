import React from "react";
import TextField from "@material-ui/core/TextField";

function NameField(props) {
  const { name, handleChange } = props;
  return (
    <TextField
      label="Название"
      name="name"
      value={name}
      onChange={handleChange}
      variant="outlined"
      required
      type="text"
      fullWidth
    />
  );
}

export default NameField;

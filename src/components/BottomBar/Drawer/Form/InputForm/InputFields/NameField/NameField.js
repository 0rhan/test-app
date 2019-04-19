import React from "react";
import TextField from "@material-ui/core/TextField";
import Label from "@material-ui/icons/Label";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

function NameField(props) {
  const { name, nameError, nameValid, handleChange } = props;
  return (
    <StyledTextField
      error={!nameValid}
      label="Название"
      name="name"
      helperText={nameError}
      value={name}
      onChange={handleChange}
      variant="outlined"
      required
      type="text"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Label />
          </InputAdornment>
        )
      }}
    />
  );
}

export default NameField;

const StyledTextField = styled(TextField)`
  && {
    padding: 0px 0px 20px;
  }
`;

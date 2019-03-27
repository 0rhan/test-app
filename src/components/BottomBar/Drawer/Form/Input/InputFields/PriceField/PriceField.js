import React from "react";
import TextField from "@material-ui/core/TextField";

function PriceField(props) {
  const { price, handleChange } = props;
  return (
    <TextField
      label="Цена"
      name="price"
      value={price}
      onChange={handleChange}
      variant="outlined"
      required
      type="number"
      InputProps={{
        inputProps: {
          min: 1,
          max: 999999999,
          step: 1,
          type: "number",
          pattern: "[0-9]{1,9}"
        }
      }}
    />
  );
}

export default PriceField;

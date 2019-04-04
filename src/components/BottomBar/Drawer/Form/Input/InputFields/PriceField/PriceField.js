import React from "react";
import TextField from "@material-ui/core/TextField";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

function PriceField(props) {
  const { price, priceError, priceValid, handleChange } = props;
  return (
    <StyledTextField
      error={!priceValid}
      label="Цена"
      name="price"
      helperText={priceError}
      value={price}
      onChange={handleChange}
      variant="outlined"
      required
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <MonetizationOn />
          </InputAdornment>
        ),
        inputProps: {
          min: 1,
          max: 9999999999,
          step: 1,
          type: "number",
          inputMode: "numeric"
        }
      }}
    />
  );
}

export default PriceField;

const StyledTextField = styled(TextField)`
  && {
    padding: 0px 0px 20px;
  }
`;

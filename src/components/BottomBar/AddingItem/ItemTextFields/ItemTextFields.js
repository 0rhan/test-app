import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { itemTextFieldsStyles } from "../../../../styles/styles";

function ItemTextFields(props) {
  const { classes } = props
  return(
    <>
      <TextField
        id = "outlined-name"
        label = "Название"
        variant = "outlined"
        required
        fullWidth
        InputLabelProps = {{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps = {{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
      />
      <TextField
        label = "Цена"
        variant = "outlined"
        type = "number"
        className = { classes.priceImput }
        InputLabelProps = {{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps = {{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          inputProps: {
            min: 0,
            max: 999999999,
            step: 1,
          }
        }}
      />
    </>
  );
}

ItemTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(itemTextFieldsStyles)(ItemTextFields);
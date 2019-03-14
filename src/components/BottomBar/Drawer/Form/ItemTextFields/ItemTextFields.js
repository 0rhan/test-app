import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { itemTextFieldsStyles } from "../../../../../styles/styles";

class ItemTextFields extends Component {
  render() {
    const { classes, name, price, handleChange } = this.props;
    console.log();
    return (
      <>
        <TextField
          label="Название"
          name="name"
          value={name}
          onChange={handleChange}
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }
          }}
        />
        <TextField
          label="Цена"
          name="price"
          value={price}
          onChange={handleChange}
          variant="outlined"
          required
          type="number"
          className={classes.priceImput}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            },
            inputProps: {
              min: 1,
              max: 999999999,
              step: 1,
              type: "number",
              pattern: "[0-9]{1,9}"
            }
          }}
        />
      </>
    );
  }
}

ItemTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(itemTextFieldsStyles)(ItemTextFields);

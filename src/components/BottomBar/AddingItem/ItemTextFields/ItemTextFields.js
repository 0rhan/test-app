import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { itemTextFieldsStyles } from "../../../../styles/styles";
import { ItemsContext } from "../../../../data/context";

class ItemTextFields extends Component {
  state = {
    priceError: false,
    nameError: false
  };

  showNameError = bool => {
    this.setState({
      ...this.state,
      nameError: bool
    });
  };
  showPriceError = bool => {
    this.setState({
      ...this.state,
      priceError: bool
    });
  };

  render() {
    let { priceError, nameError } = this.state;
    const { classes } = this.props;
    const context = this.context;
    const { getItemName, getItemPrice } = context;

    return (
      <>
        <TextField
          error={nameError}
          onBlur={event => getItemName(event, this.showNameError)}
          onChange={event => getItemName(event, this.showNameError)}
          helperText={nameError ? "Название не должно быть пустым" : ""}
          id="outlined-name"
          label="Название"
          variant="outlined"
          required
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
          error={priceError}
          onChange={event => getItemPrice(event, this.showPriceError)}
          label="Цена"
          variant="outlined"
          required
          type="number"
          defaultValue={1}
          className={classes.priceImput}
          helperText={priceError ? "Неверное значение" : ""}
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

ItemTextFields.contextType = ItemsContext;

ItemTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(itemTextFieldsStyles)(ItemTextFields);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { itemTextFieldsStyles } from "../../../../../styles/styles";
import { ItemsContext } from "../../../../../data/context";

class ItemTextFields extends Component {
  state = {
    wrongName: false,
    wrongPrice: false
  };

  showNameError = bool => {
    this.setState({
      ...this.state,
      wrongName: bool
    });
  };
  showPriceError = bool => {
    this.setState({
      ...this.state,
      wrongPrice: bool
    });
  };

  render() {
    const { wrongName, wrongPrice } = this.state;
    const { classes } = this.props;
    const context = this.context;
    const { writeItemInfo } = context;
    //console.log(this.state);

    return (
      <>
        <TextField
          error={wrongName}
          onBlur={event => writeItemInfo(event, this.showNameError)}
          onChange={event => writeItemInfo(event, this.showNameError)}
          helperText={wrongName ? "Введите название" : ""}
          label="Название"
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
          error={wrongPrice}
          onChange={event => writeItemInfo(event, this.showPriceError)}
          label="Цена"
          variant="outlined"
          required
          type="number"
          defaultValue={1}
          className={classes.priceImput}
          helperText={wrongPrice ? "Неверное значение" : ""}
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

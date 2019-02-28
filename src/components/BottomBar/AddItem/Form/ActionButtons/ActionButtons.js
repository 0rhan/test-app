import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { actionButtons } from "../../../../../styles/styles";
import { ItemsContext } from "../../../../../data/context";

class ActionButtons extends Component {
  render() {
    const { toggleAddDrawer: closeDrawer, classes } = this.props;
    const context = this.context;
    const {
      state: {
        item: { name, price }
      }
    } = context;
    const { saveItem } = context;

    return (
      <div className={classes.container}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => closeDrawer("bottom", false)}
        >
          Отмена
        </Button>
        <Button
          disabled={name && price ? false : true}
          color="secondary"
          variant="outlined"
          onClick={() => {
            saveItem();
            closeDrawer("bottom", false);
          }}
        >
          Добавить
        </Button>
      </div>
    );
  }
}

ActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

ActionButtons.contextType = ItemsContext;

export default withStyles(actionButtons)(ActionButtons);

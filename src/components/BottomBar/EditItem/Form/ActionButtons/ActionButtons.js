import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { actionButtons } from "../../../../../styles/styles";
import { ItemsContext } from "../../../../../data/context";

class ActionButtons extends Component {
  render() {
    const { toggleEditDrawer: closeDrawer, classes } = this.props;
    const context = this.context;
    const {
      editItem,
      state: {
        item: { name, price },
        itemsCollection,
        elementIndex: { index }
      }
    } = context;
    const itemForEdit = itemsCollection[index];
    const { id } = itemForEdit;
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
            editItem(index, id);
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

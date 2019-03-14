import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { actionButtons } from "../../../../../styles/styles";
import { ItemsConsumer } from "./../../../../../data/context";

class ActionButtons extends Component {
  render() {
    const { classes, toggleDrawer, name, price, date, elemKey } = this.props;
    return (
      <div className={classes.container}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={toggleDrawer(false, "closing")}
        >
          Отмена
        </Button>
        <ItemsConsumer>
          {({ writeItem }) => (
            <Button
              color="secondary"
              variant="outlined"
              onClick={writeItem(name, price, date, elemKey)}
            >
              Добавить
            </Button>
          )}
        </ItemsConsumer>
      </div>
    );
  }
}

ActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(actionButtons)(ActionButtons);

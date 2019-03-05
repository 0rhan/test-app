import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import ShowChart from "@material-ui/icons/ShowChart";
import AddItem from "./AddItem/AddItem";
import EditItem from "./EditItem/EditItem";
import { bottomBarStyles } from "../../styles/styles";
import { DrawerContext } from "../../data/context";

class BottomBar extends Component {
  state = {
    value: ""
  };

  handleActionSelect = value => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <>
        <AddItem />
        <EditItem />
        <DrawerContext.Consumer>
          {({ toggleAddDrawer }) => (
            <BottomNavigation
              value={value}
              className={classes.root}
              onChange={this.handleActionSelect}
              showLabels
            >
              <BottomNavigationAction
                label="Статистика"
                icon={<ShowChart />}
                className={classes.actionButton}
              />
              <BottomNavigationAction
                label="Добавить"
                icon={<AddShoppingCart />}
                onClick={() => toggleAddDrawer("bottom", true)}
                className={classes.actionButton}
              />
              <BottomNavigationAction
                label="Удалить"
                icon={<RemoveShoppingCart />}
                className={classes.actionButton}
              />
            </BottomNavigation>
          )}
        </DrawerContext.Consumer>
      </>
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(bottomBarStyles)(BottomBar);

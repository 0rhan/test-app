import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction, SwipeableDrawer } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import ShowChart from "@material-ui/icons/ShowChart";
import AddingItem from "./AddingItem/AddingItem";
import { bottomBarStyles } from "../../styles/styles";


class BottomAppBar extends Component {
  state = {
    //ActionButton state
    value: '',
    //Drawer state
    bottom: false,
  };

  handleChange = (event, value) => {
    this.setState( { value } );
  };

  toggleDrawer = (side, open) => () => {
    this.setState( { [side]: open } );
  }


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return(
      <>
        <SwipeableDrawer
          anchor = "bottom"
          open = { this.state.bottom }
          disableSwipeToOpen
          onClose = { this.toggleDrawer("bottom", false) }
          onOpen = { this.toggleDrawer("bottom", true) }
        >
          <AddingItem/>
        </SwipeableDrawer>
        < BottomNavigation 
          value = { value }
          className = { classes.root }
          onChange = { this.handleChange }
          showLabels >
          <BottomNavigationAction
            label = "Статистика"
            icon = { <ShowChart /> }
            className = { classes.actionButton }
          />
          <BottomNavigationAction
            label = "Добавить"
            icon = { <AddShoppingCart /> }
            onClick = { this.toggleDrawer("bottom", true) }
            className = { classes.actionButton }
          />
          <BottomNavigationAction
            label = "Удалить"
            icon = { <RemoveShoppingCart /> }
            className = { classes.actionButton }
          />
        </BottomNavigation>
      </>
    );
  }
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(bottomBarStyles)(BottomAppBar);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import ShowChart from "@material-ui/icons/ShowChart";
import Drawer from "./Drawer/Drawer";
import { bottomBarStyles } from "../../styles/styles";
import { ItemsConsumer } from "../../data/context";

class BottomBar extends Component {
  state = {
    //номер элемента
    value: 0
  };

  //Выделение активного элемента
  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <ItemsConsumer>
        {({ toggleDrawer, itemsCollection, open, mode, elemKey }) => (
          <>
            <Drawer
              toggleDrawer={toggleDrawer}
              itemsCollection={itemsCollection}
              open={open}
              mode={mode}
              elemKey={elemKey}
            />
            <BottomNavigation
              value={value}
              className={classes.root}
              onChange={this.handleChange}
              showLabels
            >
              <BottomNavigationAction
                label="Статистика"
                icon={<ShowChart />}
                className={classes.actionButton}
              />
              <BottomNavigationAction
                label="Добавить"
                onClick={toggleDrawer(true, "adding")}
                icon={<AddShoppingCart />}
                className={classes.actionButton}
              />
              <BottomNavigationAction
                label="Удалить"
                icon={<RemoveShoppingCart />}
                className={classes.actionButton}
              />
            </BottomNavigation>
          </>
        )}
      </ItemsConsumer>
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(bottomBarStyles)(BottomBar);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Card,
  Checkbox,
  CardHeader,
  Divider,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Edit from "@material-ui/icons/Edit";
import Cancel from "@material-ui/icons/Cancel";
import { itemStyles } from "../../../styles/styles";
import { ItemsContext, DrawerContext } from "../../../data/context";

class Item extends Component {
  state = {
    expanded: false,
    anchorEl: null
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMenuClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  closeMenu = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes, name, date, price, id, index } = this.props;
    const { anchorEl } = this.state;
    const context = this.context;
    const { deleteItem } = context;

    return (
      <ListItem>
        <Card className={classes.itemCardContainer}>
          <IconButton
            className={classes.deleteButton}
            onClick={() => deleteItem(id)}
          >
            <Cancel />
          </IconButton>
          <div className={classes.itemCardHeaderContainer}>
            <Checkbox />
            <CardHeader className={classes.cardHeader} title={name} />
          </div>
          <Divider />
          <div className={classes.cardFooter}>
            <div className={classes.itemInfoDate}>{date}</div>
            <div>{`Стоимость: ${price}`}</div>
            <IconButton
              onClick={this.handleMenuClick}
              aria-owns={anchorEl ? "item-menu" : undefined}
              aria-haspopup="true"
            >
              <MoreVertIcon />
            </IconButton>
            <DrawerContext.Consumer>
              {({ toggleEditDrawer, getElementIndex }) => (
                <Menu
                  id="item-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.closeMenu}
                >
                  <MenuItem
                    onClick={() => {
                      toggleEditDrawer("bottom", true);
                      getElementIndex(index);
                    }}
                  >
                    <Edit fontSize="inherit" />
                    Редактировать
                  </MenuItem>
                </Menu>
              )}
            </DrawerContext.Consumer>
          </div>
        </Card>
      </ListItem>
    );
  }
}

Item.contextType = ItemsContext;

Item.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(itemStyles)(Item);

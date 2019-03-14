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
import { ItemsConsumer } from "../../../data/context";

class Item extends Component {
  state = {
    anchorEl: null
  };

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, name, price, date, elemKey } = this.props;
    const { anchorEl } = this.state;
    const formatedDate = date.format("DD.MM.YY");
    return (
      <ListItem>
        <ItemsConsumer>
          {({ deleteItem, toggleDrawer }) => (
            <Card className={classes.itemCardContainer}>
              <IconButton
                className={classes.deleteButton}
                onClick={deleteItem(elemKey)}
              >
                <Cancel />
              </IconButton>
              <div className={classes.itemCardHeaderContainer}>
                <Checkbox />
                <CardHeader className={classes.cardHeader} title={name} />
              </div>
              <Divider />
              <div className={classes.cardFooter}>
                <div className={classes.itemInfoDate}>{formatedDate}</div>
                <div>{`Стоимость: ${price}`}</div>
                <IconButton
                  onClick={this.openMenu}
                  aria-owns={anchorEl ? "item-menu" : undefined}
                  aria-haspopup="true"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="item-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.closeMenu}
                >
                  <MenuItem onClick={toggleDrawer(true, "editing", elemKey)}>
                    <Edit fontSize="inherit" />
                    Редактировать
                  </MenuItem>
                </Menu>
              </div>
            </Card>
          )}
        </ItemsConsumer>
      </ListItem>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(itemStyles)(Item);

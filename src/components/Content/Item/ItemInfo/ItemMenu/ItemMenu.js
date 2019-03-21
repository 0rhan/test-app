import React, { Component } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import { MoreVert, Edit } from "@material-ui/icons/";

class ItemMenu extends Component {
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
    const { anchorEl } = this.state;
    const { toggleDrawer, elemKey } = this.props;
    return (
      <>
        <IconButton
          onClick={this.openMenu}
          aria-owns={anchorEl ? "item-menu" : undefined}
          aria-haspopup="true"
        >
          <MoreVert />
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
      </>
    );
  }
}

export default ItemMenu;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Card,
  Checkbox,
  CardHeader,
  Collapse,
  CardContent,
  Divider,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Edit from "@material-ui/icons/Edit";
import Cancel from "@material-ui/icons/Cancel";
import { itemStyles } from "../../../styles/styles";
import ItemsContext from "../../../data/context";

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
    const { classes, name, date, price, id } = this.props;
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
            <CardHeader
              className={classes.cardHeader}
              title={name}
              action={
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              }
              onClick={this.handleExpandClick}
            />
          </div>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>This is card content</CardContent>
          </Collapse>
          <Divider />
          <div className={classes.cardFooter}>
            <div className={classes.itemInfoDate}>{date}</div>
            <div>{`Цена: ${price}`}</div>
            <IconButton onClick={this.handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.closeMenu}
            >
              <MenuItem>
                <Edit fontSize="inherit" />
                Редактировать
              </MenuItem>
            </Menu>
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

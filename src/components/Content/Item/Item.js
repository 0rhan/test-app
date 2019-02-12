import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ListItem, Card, Checkbox, CardHeader, IconButton, Collapse, CardContent, Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { itemStyles } from "../../../styles/styles";

class Item extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ( { expanded: !state.expanded } ));
  };

  render() {
    const { classes } = this.props;
    return(
      <ListItem >
        <Card className = { classes.itemCardContainer }>
          <div className = { classes.itemCardHeaderContainer }>
            <Checkbox/>
            <CardHeader
              className = { classes.cardHeader }
              title = "Item name"
              action = {
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              }
              onClick = { this.handleExpandClick }
            />
          </div>
          <Collapse
            in = { this.state.expanded }
            timeout = "auto" 
            unmountOnExit
          >
              <CardContent>
                  This is card content
              </CardContent>
          </Collapse>
          <Divider/>
          <div className = { classes.cardFooter }>
              <div className = { classes.itemInfoDate }>
                Date
              </div>
              <div>
                Price
              </div>
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
          </div>
        </Card>
      </ListItem>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(itemStyles)(Item);
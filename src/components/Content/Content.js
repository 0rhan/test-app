import React, { Component } from "react";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { contentStyles } from "../../styles/styles";
import { ItemsContext } from "../../data/context";

class Content extends Component {
  render() {
    const { classes } = this.props;
    const context = this.context;
    const {
      state: { collectedItems }
    } = context;
    return (
      <main className={classes.mainContainer}>
        <List className={classes.itemListContainer}>{collectedItems}</List>
      </main>
    );
  }
}

Content.contextType = ItemsContext;

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(contentStyles)(Content);

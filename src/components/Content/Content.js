import React, { Component } from "react";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import { contentStyles } from "../../styles/styles";


class Content extends Component {

  render() {
    const { classes } = this.props;
    return(
      <main className = { classes.mainContainer }>
        <List className = { classes.itemListContainer }>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </List>
      </main>
    );
  }

}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contentStyles)(Content);
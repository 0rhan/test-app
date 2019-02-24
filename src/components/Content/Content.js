import React, { Component } from "react";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { contentStyles } from "../../styles/styles";
import Item from "../../components/Content/Item/Item";
import ItemsContext from "../../data/context";

class Content extends Component {
  render() {
    const { classes } = this.props;
    const context = this.context;
    const {
      state: { itemsCollection }
    } = context;
    const items = itemsCollection.map(item => {
      const { name, price, date, id } = item;
      return <Item name={name} price={price} date={date} key={id} id={id} />;
    });
    return (
      <main className={classes.mainContainer}>
        <List className={classes.itemListContainer}> {items} </List>
      </main>
    );
  }
}

Content.contextType = ItemsContext;

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(contentStyles)(Content);

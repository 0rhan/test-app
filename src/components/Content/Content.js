import React, { Component } from "react";
import { List, Typography } from "@material-ui/core";
import Item from "../../components/Content/Item/Item";
import { ItemsContext } from "../../data/context";
import styled from "styled-components";

const Main = styled.main`
  && {
    height: auto;
  }
`;

const ListContainer = styled(List)`
  && {
    padding-top: 70px;
    padding-bottom: 56px;
    height: 100%;
  }
`;

class Content extends Component {
  render() {
    //console.log(this.props);
    const context = this.context;

    const {
      state: { itemsCollection }
    } = context;

    const items = itemsCollection.map((item, index) => {
      const { name, price, date, id } = item;
      return (
        <Item
          name={name}
          price={price}
          date={date}
          key={id}
          id={id}
          index={index}
        />
      );
    });

    //console.log(items.length);

    return (
      <Main>
        <ListContainer>
          {items.length === 0 ? <Typography>Пусто</Typography> : items}
        </ListContainer>
      </Main>
    );
  }
}

Content.contextType = ItemsContext;

export default Content;

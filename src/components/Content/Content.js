import React, { Component } from "react";
import { List } from "@material-ui/core";
import styled from "styled-components";
import Item from "../../components/Content/Item/Item";

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
    const { itemsCollection } = this.props;
    const items = itemsCollection.map(item => {
      const { name, price, date, key } = item;
      return (
        <Item name={name} price={price} date={date} key={key} elemKey={key} />
      );
    });
    return (
      <Main>
        <ListContainer> {items}</ListContainer>
      </Main>
    );
  }
}

export default Content;

import React from "react";
import List from "@material-ui/core/List";
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

function Content(props) {
  const { itemsCollection } = props;
  const items = itemsCollection.map(item => {
    const { name, price, date, key } = item;
    console.log(key);
    return (
      <Item name={name} price={price} date={date} key={key} elemKey={key} />
    );
  });
  return (
    <Main>
      <ListContainer>{items}</ListContainer>
    </Main>
  );
}

export default Content;

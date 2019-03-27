import React from "react";
import { ListItem, Card, Divider } from "@material-ui/core";
import { ItemsConsumer } from "../../../data/context";
import styled from "styled-components";
import ItemHeader from "./ItemHeader/ItemHeader";
import ItemInfo from "./ItemInfo/ItemInfo";

function Item(props) {
  const { name, price, date, elemKey } = props;
  return (
    <ListItem>
      <ItemsConsumer>
        {({ deleteItem, openDrawer }) => (
          <ItemContainer>
            <ItemHeader name={name} deleteItem={deleteItem} elemKey={elemKey} />
            <Divider />
            <ItemInfo
              price={price}
              date={date}
              openDrawer={openDrawer}
              elemKey={elemKey}
            />
          </ItemContainer>
        )}
      </ItemsConsumer>
    </ListItem>
  );
}

export default Item;

const ItemContainer = styled(Card)`
  && {
    width: 100%;
  }
`;

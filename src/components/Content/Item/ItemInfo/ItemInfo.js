import React from "react";
import styled from "styled-components";
import ItemMenu from "./ItemMenu/ItemMenu";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BuyingDate = styled.div`
  padding-left: 12px;
  flex-basis: 50%;
`;

function ItemInfo(props) {
  const { price, date, elemKey, toggleDrawer } = props;
  const formatedDate = date.format("DD.MM.YY");
  return (
    <InfoContainer>
      <BuyingDate>{formatedDate}</BuyingDate>
      <div>{`Стоимость: ${price}`}</div>
      <ItemMenu elemKey={elemKey} toggleDrawer={toggleDrawer} />
    </InfoContainer>
  );
}

export default ItemInfo;

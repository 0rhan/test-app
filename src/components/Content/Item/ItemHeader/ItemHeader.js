import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import styled from "styled-components";
import DeleteButton from "./DeleteButton/DeleteButton";
import DoneButton from "./DoneButton/DoneButton";

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled(CardHeader)`
  && {
    flex-direction: row;
    flex-grow: 1;
  }
`;

function ItemHeader(props) {
  const { name, deleteItem, elemKey } = props;
  return (
    <>
      <DeleteButton deleteItem={deleteItem} elemKey={elemKey} />
      <NameContainer>
        <DoneButton />
        <Name title={name} />
      </NameContainer>
    </>
  );
}

export default ItemHeader;

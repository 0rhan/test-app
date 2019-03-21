import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/Cancel";
import styled from "styled-components";

const Button = styled(IconButton)`
  && {
    position: absolute;
    top: 0;
    padding: 0px;
    right: 5px;
    color: red;
    background-color: white;
  }
`;

function DeleteButton(props) {
  const { deleteItem, elemKey } = props;
  return (
    <Button onClick={deleteItem(elemKey)}>
      <Cancel />
    </Button>
  );
}

export default DeleteButton;

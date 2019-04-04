import React from "react";
import { Button } from "@material-ui/core";
import { ItemsConsumer } from "../../../../../../data/context";
import styled from "styled-components";

function ActionButtons(props) {
  const { closeDrawer, name, price, date, elemKey, formValid } = props;
  return (
    <ButtonsContainer>
      <Button
        color="secondary"
        variant="outlined"
        onClick={() => closeDrawer(false)}
      >
        Отмена
      </Button>
      <ItemsConsumer>
        {({ writeItem }) => (
          <Button
            color="secondary"
            variant="outlined"
            disabled={!formValid}
            onClick={() => {
              writeItem(name, price, date, elemKey);
              closeDrawer(false);
            }}
          >
            Добавить
          </Button>
        )}
      </ItemsConsumer>
    </ButtonsContainer>
  );
}

export default ActionButtons;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0px 20px;
`;

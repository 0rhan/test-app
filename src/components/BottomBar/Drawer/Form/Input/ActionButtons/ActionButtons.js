import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ItemsConsumer } from "../../../../../../data/context";
import styled from "styled-components";

class ActionButtons extends Component {
  render() {
    const { closeDrawer, name, price, date, elemKey } = this.props;
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
}

export default ActionButtons;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

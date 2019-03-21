import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ItemsConsumer } from "../../../../../../data/context";
import styled from "styled-components";
import { ToggleOnOutlined } from "@material-ui/icons";

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class ActionButtons extends Component {
  render() {
    const { toggleDrawer, name, price, date, elemKey } = this.props;
    return (
      <ButtonsContainer>
        <Button
          color="secondary"
          variant="outlined"
          onClick={toggleDrawer(false, "closing")}
        >
          Отмена
        </Button>
        <ItemsConsumer>
          {({ writeItem }) => (
            <Button
              color="secondary"
              variant="outlined"
              onClick={writeItem(name, price, date, elemKey)}
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

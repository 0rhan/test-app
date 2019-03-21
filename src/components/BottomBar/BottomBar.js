import React, { Component } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import {
  AddShoppingCart,
  RemoveShoppingCart,
  ShowChart
} from "@material-ui/icons";
import Drawer from "./Drawer/Drawer";
import { ItemsConsumer } from "../../data/context";
import styled from "styled-components";

const Navigation = styled(BottomNavigation)`
  top: auto;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

class BottomBar extends Component {
  state = {
    // номер элемента
    value: 0
  };

  // Выделение активного элемента
  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <ItemsConsumer>
        {({ toggleDrawer, itemsCollection, open, mode, elemKey }) => (
          <>
            <Drawer
              toggleDrawer={toggleDrawer}
              itemsCollection={itemsCollection}
              open={open}
              mode={mode}
              elemKey={elemKey}
            />
            <Navigation value={value} onChange={this.handleChange} showLabels>
              <BottomNavigationAction label="Статистика" icon={<ShowChart />} />
              <BottomNavigationAction
                label="Добавить"
                onClick={toggleDrawer(true, "adding")}
                icon={<AddShoppingCart />}
              />
              <BottomNavigationAction
                label="Удалить"
                icon={<RemoveShoppingCart />}
              />
            </Navigation>
          </>
        )}
      </ItemsConsumer>
    );
  }
}

export default BottomBar;

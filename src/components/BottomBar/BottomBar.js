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
        {({
          openDrawer,
          closeDrawer,
          itemsCollection,
          open,
          formMode,
          elemKey
        }) => (
          <>
            <Drawer
              openDrawer={openDrawer}
              closeDrawer={closeDrawer}
              itemsCollection={itemsCollection}
              open={open}
              formMode={formMode}
              elemKey={elemKey}
            />
            <Navigation value={value} onChange={this.handleChange} showLabels>
              <BottomNavigationAction label="Статистика" icon={<ShowChart />} />
              <BottomNavigationAction
                label="Добавить"
                onClick={openDrawer(true, "adding")}
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

const Navigation = styled(BottomNavigation)`
  top: auto;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

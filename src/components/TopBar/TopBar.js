import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Controls from "./Controls/Controls";
import { ItemsConsumer } from "../../data/context";

function TopBar(props) {
  return (
    <AppBar color="primary">
      <Toolbar>
        <ItemsConsumer>
          {({ sortItem }) => <Controls sortItem={sortItem} />}
        </ItemsConsumer>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

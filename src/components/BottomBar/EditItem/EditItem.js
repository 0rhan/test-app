import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { DrawerContext } from "../../../data/context";
import Form from "./Form/Form";

function Drawer(props) {
  return (
    <DrawerContext.Consumer>
      {({
        state: {
          drawers: {
            editDrawer: { bottom }
          }
        },
        toggleEditDrawer
      }) => (
        <SwipeableDrawer
          anchor="bottom"
          open={bottom}
          disableSwipeToOpen
          disableBackdropTransition
          onClose={() => toggleEditDrawer("bottom", false)}
          onOpen={() => toggleEditDrawer("bottom", true)}
          SlideProps={{
            unmountOnExit: true
          }}
        >
          <Form toggleEditDrawer={toggleEditDrawer} />
        </SwipeableDrawer>
      )}
    </DrawerContext.Consumer>
  );
}

export default Drawer;

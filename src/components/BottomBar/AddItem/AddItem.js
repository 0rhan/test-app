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
            addDrawer: { bottom }
          }
        },
        toggleAddDrawer
      }) => (
        <SwipeableDrawer
          anchor="bottom"
          open={bottom}
          disableSwipeToOpen
          disableBackdropTransition
          onClose={() => toggleAddDrawer("bottom", false)}
          onOpen={() => toggleAddDrawer("bottom", true)}
          SlideProps={{
            unmountOnExit: true
          }}
        >
          <Form toggleAddDrawer={toggleAddDrawer} />
        </SwipeableDrawer>
      )}
    </DrawerContext.Consumer>
  );
}

export default Drawer;

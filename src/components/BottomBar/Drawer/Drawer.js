import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Form from "./Form/Form";

function Drawer(props) {
  const { toggleDrawer, open, mode, itemsCollection, elemKey } = props;
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableSwipeToOpen
      disableBackdropTransition
      SlideProps={{
        unmountOnExit: true
      }}
    >
      <Form
        toggleDrawer={toggleDrawer}
        itemsCollection={itemsCollection}
        mode={mode}
        elemKey={elemKey}
      />
    </SwipeableDrawer>
  );
}

export default Drawer;

import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Form from "./Form/Form";

function Drawer(props) {
  const {
    openDrawer,
    closeDrawer,
    open,
    formMode,
    itemsCollection,
    elemKey
  } = props;

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => closeDrawer(false)}
      onOpen={openDrawer(true)}
      disableSwipeToOpen
      disableBackdropTransition
      SlideProps={{
        unmountOnExit: true
      }}
    >
      <Form
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        itemsCollection={itemsCollection}
        formMode={formMode}
        elemKey={elemKey}
      />
    </SwipeableDrawer>
  );
}

export default Drawer;

const contentStyles = theme => ({
  itemListContainer: {
    paddingTop: "70px",
    paddingBottom: theme.mixins.toolbar.minHeight,
    height: "100%"
  }
});

const itemStyles = theme => ({
  itemCardContainer: {
    width: "100%",
    backgroundColor: theme.palette.primary.main
  },

  itemCardHeaderContainer: {
    display: "flex",
    flexDirection: "row"
  },

  cardHeader: {
    flexDirection: "row",
    flexGrow: "1"
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  itemInfoDate: {
    paddingLeft: "12px",
    flexBasis: "50%"
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    padding: "0px",
    right: "5px",
    color: "red",
    backgroundColor: "white"
  }
});

const bottomBarStyles = theme => ({
  root: {
    top: "auto",
    bottom: 0,
    position: "fixed",
    width: "100%",
    backgroundColor: theme.palette.secondary.main
  },
  actionButton: {
    color: theme.palette.primary.dark
  }
});

const addingItemStyles = theme => ({
  FormLabel: {
    color: "black",
    textAlign: "center",
    padding: "10px 0px 11px 0px"
  },
  FormControl: {
    width: "95%",
    margin: "auto"
  },
  Form: {
    display: "flex",
    flexDirection: "column"
  }
});

const actionButtons = theme => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const itemAddImageStyles = theme => ({
  imgLoadButton: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
  }
});

const itemTextFieldsStyles = theme => ({
  priceImput: {
    marginTop: "10px"
  },

  cssLabel: {
    "&$cssFocused": {
      color: theme.palette.secondary.dark
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: theme.palette.secondary.main
    }
  },

  cssFocused: {},
  notchedOutline: {}
});

const datePickerStyles = theme => ({
  DatePicker: {
    margin: "10px 0px 10px 0px"
  }
});

export {
  contentStyles,
  itemStyles,
  bottomBarStyles,
  addingItemStyles,
  itemAddImageStyles,
  itemTextFieldsStyles,
  datePickerStyles,
  actionButtons
};

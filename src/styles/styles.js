const controlsStyles = theme => ({
  FormControl: {
    margin: "10px",
    minWidth: "110px"
  },
});

const contentStyles = theme => ({
  mainContainer: {
    height: "auto",
    backgroundColor: theme.palette.primary.light,
  },
  itemListContainer: {
    paddingTop: "64px",
    paddingBottom: theme.mixins.toolbar.minHeight,
    height: "100%",
  }
});

const itemStyles = theme => ({
  itemCardContainer: {
    width: "100%",
    backgroundColor: theme.palette.primary.main
  },

  itemCardHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },

  cardHeader: {
    flexDirection: "row",
    flexGrow: "1",
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemInfoDate: {
    paddingLeft: "12px",
    flexBasis: "50%",
  }
});

const bottomBarStyles = theme => ({
  root: {
    top: "auto",
    bottom: 0,
    position: "fixed",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
  actionButton: {
    color: theme.palette.primary.dark
  }
});

const addingItemStyles = theme => ({
  Card: {
    backgroundColor: theme.palette.primary.main,
  },
  Form: {
    width: "95%",
    margin: "auto",
  }
})

const itemAddImageStyles = theme => ({
  imgLoadButton: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
  },
})

const itemTextFieldsStyles = theme => ({
  priceImput: {
    marginTop: "10px",
  },

  cssLabel: {
    "&$cssFocused": {
      color: theme.palette.secondary.dark,
    },
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
  },

  cssFocused: {},
  notchedOutline: {},
})

export { controlsStyles, contentStyles, itemStyles, bottomBarStyles, addingItemStyles, itemAddImageStyles, itemTextFieldsStyles };
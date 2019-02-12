import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "./colors/colors";
import { indigo } from "./colors/colors";

const mainTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: grey.light,
      main: grey.main,
      dark: grey.dark,
    },
    secondary: {
      light: indigo.light,
      main: indigo.main,
      dark: indigo.dark,
    },
    error:{
      main: "#FF0000",
    } 
  },
});

const calendarTheme = createMuiTheme({
  typography: { useNextVariants: true },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: indigo.light,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: 'white',
      },
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      isSelected: {
        backgroundColor: indigo.main,
        color: grey.light,
      },
      current: {
        color: indigo.main,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: indigo.main,
      },
    },
  }
})

export { mainTheme, calendarTheme }

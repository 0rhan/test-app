import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, cyan } from "@material-ui/core/colors";

const mainTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      main: blueGrey[600]
    },
    secondary: {
      main: cyan["A400"]
    },
    error: {
      main: "#FF0000"
    }
  }
});

/*const calendarTheme = createMuiTheme({
  typography: { useNextVariants: true },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: indigo.light
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: 'white',
      }
    },
    MuiPickersDay: {
      day: {
        color: "black"
      },
      isSelected: {
        backgroundColor: indigo.main,
        color: grey.light
      },
      current: {
        color: indigo.main
      }
    },
    MuiPickersModal: {
      dialogAction: {
        color: indigo.main
      }
    }
  }
});*/

export { mainTheme /*calendarTheme*/ };

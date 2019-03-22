import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, indigo } from "@material-ui/core/colors";

const mainTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      main: blueGrey[600]
    },
    secondary: {
      main: indigo[400]
    },
    error: {
      main: "#FF0000"
    }
  }
});

export default mainTheme;

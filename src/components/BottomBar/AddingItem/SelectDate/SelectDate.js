import React, { Component } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import moment from "moment";
import "moment/locale/ru";
import MomentUtils from "@date-io/moment";
import { MuiThemeProvider } from "@material-ui/core";
import { calendarTheme } from "../../../../styles/themes/themes";


class SelecDate extends Component {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState( { selectedDate: date } );
  };

  render() {
    const { selectedDate } = this.state;
    const locale = moment.locale("ru");

    return(
      <MuiThemeProvider theme = { calendarTheme }>
        <MuiPickersUtilsProvider utils = { MomentUtils } locale = { locale } moment = { moment }>
            <DatePicker
              margin = "normal"
              label = "Date picker"
              value = { selectedDate }
              onChange = { this.handleDateChange }
            />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
   );
  }
}

export default SelecDate;
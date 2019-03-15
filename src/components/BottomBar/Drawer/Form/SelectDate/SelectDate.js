import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ru";

import { calendarTheme } from "../../../../../styles/themes/themes";

class SelectDate extends Component {
  render() {
    const { changeDate, date } = this.props;
    const locale = moment.locale("ru");

    return (
      <MuiThemeProvider theme={calendarTheme}>
        <MuiPickersUtilsProvider
          utils={MomentUtils}
          locale={locale}
          moment={moment}
        >
          <DatePicker
            value={date}
            onChange={changeDate}
            variant="outlined"
            autoOk
            disablePast
          />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export default SelectDate;

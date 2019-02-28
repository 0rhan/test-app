import React, { Component } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import moment from "moment";
import "moment/locale/ru";
import MomentUtils from "@date-io/moment";
import { MuiThemeProvider } from "@material-ui/core";
import { calendarTheme } from "../../../../../styles/themes/themes";
import { ItemsContext } from "../../../../../data/context";

class SelectDate extends Component {
  state = {
    selectedDate: new Date()
  };

  handleDate = date => {
    this.setState({
      selectedDate: date
    });
    const context = this.context;
    const { getItemDate } = context;
    getItemDate(date);
  };

  render() {
    const locale = moment.locale("ru");
    const { selectedDate } = this.state;

    return (
      <MuiThemeProvider theme={calendarTheme}>
        <div>
          <p>Выберите дату:</p>
          <MuiPickersUtilsProvider
            utils={MomentUtils}
            locale={locale}
            moment={moment}
          >
            <DatePicker
              value={selectedDate}
              disablePast
              autoOk
              margin="normal"
              onChange={this.handleDate}
            />
          </MuiPickersUtilsProvider>
        </div>
      </MuiThemeProvider>
    );
  }
}

SelectDate.contextType = ItemsContext;

export default SelectDate;

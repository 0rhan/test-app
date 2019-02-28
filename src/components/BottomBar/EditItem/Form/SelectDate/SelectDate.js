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
    selectedDate: this.props.date
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
    const { selectedDate } = this.state;
    const locale = moment.locale("ru");
    return (
      <MuiThemeProvider theme={calendarTheme}>
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
            label="Выбрать дату"
            onChange={this.handleDate}
          />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

SelectDate.contextType = ItemsContext;

export default SelectDate;

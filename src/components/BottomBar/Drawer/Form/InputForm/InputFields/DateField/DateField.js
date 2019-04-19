import React, { Component } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ru";
import styled from "styled-components";

class DateField extends Component {
  render() {
    const { changeDate, date } = this.props;
    const locale = moment.locale("ru");

    return (
      <>
        <MuiPickersUtilsProvider
          utils={MomentUtils}
          locale={locale}
          moment={moment}
        >
          <StyledDatePicker
            name="date"
            label="Дата"
            value={date}
            onChange={changeDate}
            variant="outlined"
            autoOk
            disablePast
          />
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

export default DateField;

const StyledDatePicker = styled(DatePicker)`
  && {
    padding: 0px 0px 20px;
  }
`;

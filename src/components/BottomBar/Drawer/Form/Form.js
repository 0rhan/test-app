import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ItemTextFields from "./ItemTextFields/ItemTextFields";
import SelectDate from "./SelectDate/SelectDate";
import ActionButtons from "./ActionButtons/ActionButtons";
import { FormControl, FormLabel } from "@material-ui/core";
import moment from "moment";
import { addingItemStyles } from "../../../../styles/styles";

class Form extends Component {
  state = {
    name: "",
    price: "",
    date: moment()
  };

  //Получение данных из формы
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  changeDate = date => {
    this.setState({
      date: date
    });
  };

  render() {
    const { classes, toggleDrawer, elemKey, mode } = this.props;
    const { name, price, date } = this.state;

    return (
      <FormControl>
        <FormLabel>
          {mode === "editing" ? "Редактировать покупку" : "Добавить в список"}
        </FormLabel>
        <form className={classes.Form}>
          <ItemTextFields
            name={name}
            price={price}
            handleChange={this.handleChange}
          />
          <SelectDate changeDate={this.changeDate} date={date} />
          <ActionButtons
            toggleDrawer={toggleDrawer}
            name={name}
            price={price}
            date={date}
            elemKey={elemKey}
          />
        </form>
      </FormControl>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addingItemStyles)(Form);

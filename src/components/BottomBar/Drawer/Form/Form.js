import React, { Component } from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import moment from "moment";
import styled from "styled-components";
import Input from "./Input/Input";
import { getItem } from "../../../../utils/utils";

class Form extends Component {
  constructor(props) {
    super(props);
    const { itemsCollection, elemKey, formMode } = props;

    /* Получение значений по умолчанию при редактировании формы */
    const initialItem =
      formMode === "editing" ? getItem(itemsCollection, elemKey) : {};
    const { name: initName, price: initPrice, date: initDate } = initialItem;

    this.state = {
      name: initName || "",
      price: initPrice || "",
      date: initDate || moment()
    };
  }

  // Получение данных из формы
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
    const { formMode, openDrawer, closeDrawer, elemKey } = this.props;
    const { name, price, date } = this.state;

    return (
      <FormContainer>
        <StyledFormLabel>
          {formMode === "editing"
            ? "Редактировать покупку"
            : "Добавить в список"}
        </StyledFormLabel>
        <StyledForm>
          <Input
            name={name}
            price={price}
            date={date}
            elemKey={elemKey}
            handleChange={this.handleChange}
            changeDate={this.changeDate}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
          />
        </StyledForm>
      </FormContainer>
    );
  }
}

export default Form;

const FormContainer = styled(FormControl)`
  && {
    width: 95%;
    margin: auto;
  }
`;

const StyledFormLabel = styled(FormLabel)`
  && {
    color: black;
    text-align: center;
    padding: 10px 0px 10px 0px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

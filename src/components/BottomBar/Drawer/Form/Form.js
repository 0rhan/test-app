import React, { Component } from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import moment from "moment";
import styled from "styled-components";
import InputForm from "./InputForm/InputForm";
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
      // Состояние данных формы
      formData: {
        name: initName || "",
        price: initPrice || "",
        date: initDate || moment()
      },

      // Состояние валидности данных формы
      formValidation: {
        formErrors: { nameError: "", priceError: "" },
        nameValid: false,
        priceValid: false
      }
    };
  }

  // Получение данных из формы
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const reg = /[^0-9.]+|^[0]{2}[1-9]*$|(^\.)|(\.{2}$)|\.(\d{3}$)|(\b\.\d+\b)(\.+$)/;

    // Запись данных из формы
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value.replace(reg, "")
      }
    }));

    // Проверка
    const dataValidation = {
      // Проверка валидности названия покупки
      name: () => {
        const nameValid = value !== "" && value !== " ";

        this.setState(prevState => ({
          formValidation: {
            ...prevState.formValidation,
            nameValid: nameValid,
            formErrors: {
              ...prevState.formValidation.formErrors,
              nameError: nameValid ? "" : "Название не должно быть пустым"
            }
          }
        }));
      },

      // Проверка валидности цены покупки
      price: () => {
        // Больше 0 и только 2 символа после .
        const reg = /(?!^[.]|0$|^[0])^-?\d*[.]?\d{0,2}$/;

        const priceValid = reg.test(value) && value !== "";

        this.setState(prevState => ({
          formValidation: {
            ...prevState.formValidation,
            priceValid: priceValid,
            formErrors: {
              ...prevState.formValidation.formErrors,
              priceError: priceValid ? "" : "Некорректный ввод. Пример: 520.30"
            }
          }
        }));
      }
    };
    dataValidation[name]();
  };

  changeDate = date => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        date: date
      }
    }));
  };

  render() {
    const { formMode, openDrawer, closeDrawer, elemKey } = this.props;
    const {
      formData: { name, price, date },
      formValidation: {
        formErrors: { nameError, priceError },
        nameValid,
        priceValid
      }
    } = this.state;
    const formValid = nameValid && priceValid;

    return (
      <FormContainer>
        <StyledFormLabel>
          {formMode === "editing"
            ? "Редактировать покупку"
            : "Добавить в список"}
        </StyledFormLabel>
        <StyledForm>
          <InputForm
            name={name}
            nameError={nameError}
            nameValid={nameValid}
            priceValid={priceValid}
            price={price}
            priceError={priceError}
            date={date}
            formValid={formValid}
            formMode={formMode}
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
    padding: 10px 0px 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

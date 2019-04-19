import React from "react";
import InputFields from "./InputFields/InputFields";
import ActionButtons from "./ActionButtons/ActionButtons";

function InputForm(props) {
  const {
    name,
    nameError,
    nameValid,
    price,
    priceError,
    priceValid,
    formValid,
    formMode,
    date,
    elemKey,
    handleChange,
    changeDate,
    openDrawer,
    closeDrawer
  } = props;
  return (
    <>
      <InputFields
        name={name}
        nameError={nameError}
        nameValid={nameValid}
        price={price}
        priceError={priceError}
        priceValid={priceValid}
        date={date}
        handleChange={handleChange}
        changeDate={changeDate}
      />
      <ActionButtons
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        name={name}
        price={price}
        formValid={formValid}
        formMode={formMode}
        date={date}
        elemKey={elemKey}
      />
    </>
  );
}

export default InputForm;

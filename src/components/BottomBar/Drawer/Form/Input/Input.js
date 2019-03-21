import React from "react";
import InputFields from "./InputFields/InputFields";
import ActionButtons from "./ActionButtons/ActionButtons";

function Input(props) {
  const {
    name,
    price,
    date,
    elemKey,
    handleChange,
    changeDate,
    toggleDrawer
  } = props;
  return (
    <>
      <InputFields
        name={name}
        price={price}
        date={date}
        handleChange={handleChange}
        changeDate={changeDate}
      />
      <ActionButtons
        toggleDrawer={toggleDrawer}
        name={name}
        price={price}
        date={date}
        elemKey={elemKey}
      />
    </>
  );
}

export default Input;

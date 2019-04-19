import React from "react";
import NameField from "./NameField/NameField";
import PriceField from "./PriceField/PriceField";
import DateField from "./DateField/DateField";

function InputFields(props) {
  const {
    name,
    nameError,
    nameValid,
    priceError,
    priceValid,
    price,
    date,
    handleChange,
    changeDate
  } = props;
  return (
    <>
      <NameField
        name={name}
        nameError={nameError}
        nameValid={nameValid}
        handleChange={handleChange}
      />
      <PriceField
        price={price}
        priceError={priceError}
        priceValid={priceValid}
        handleChange={handleChange}
      />
      <DateField date={date} changeDate={changeDate} />
    </>
  );
}

export default InputFields;

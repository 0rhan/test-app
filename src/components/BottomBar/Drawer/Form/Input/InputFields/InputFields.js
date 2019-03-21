import React from "react";
import NameField from "./NameField/NameField";
import PriceField from "./PriceField/PriceField";
import DateField from "./DateField/DateField";

function InputFields(props) {
  const { name, price, date, handleChange, changeDate } = props;
  return (
    <>
      <NameField name={name} handleChange={handleChange} />
      <PriceField price={price} handleChange={handleChange} />
      <DateField date={date} changeDate={changeDate} />
    </>
  );
}

export default InputFields;

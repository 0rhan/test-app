const getDateString = date => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  };

  const formattedDate = date.toLocaleString("ru", options);
  return formattedDate;
};

export default getDateString;

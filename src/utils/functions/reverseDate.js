const reverseDate = str => {
  const date = str.slice(0, 2);
  const month = str.slice(3, 5);
  const year = str.slice(6);
  let formatedDate;
  if (date && month && year) {
    formatedDate = `20${year}-${month}-${date}`;
    return formatedDate;
  }
};

export default reverseDate;

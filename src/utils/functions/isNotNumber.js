const isNotNumber = value => {
  if (isNaN(value) || +value === 0) {
    return true;
  } else {
    return false;
  }
};

export default isNotNumber;

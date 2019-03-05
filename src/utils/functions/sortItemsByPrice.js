const ascendingPrice = (itemA, itemB) => {
  const { price: priceA } = itemA;
  const { price: priceB } = itemB;

  return priceA - priceB;
};

const descendingPrice = (itemA, itemB) => {
  const { price: priceA } = itemA;
  const { price: priceB } = itemB;

  return priceB - priceA;
};

export { descendingPrice, ascendingPrice };

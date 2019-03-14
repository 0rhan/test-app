const getItemIndex = (itemsCollection, elemKey) => {
  const itemIndex = itemsCollection.findIndex(item => elemKey === item.key);
  return itemIndex;
};

export { getItemIndex };

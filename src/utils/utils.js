const getItemIndex = (itemsCollection, elemKey) => {
  const itemIndex = itemsCollection.findIndex(item => elemKey === item.key);
  return itemIndex;
};

const getItem = (itemsCollection, elemKey) => {
  const item = itemsCollection.find(item => elemKey === item.key);
  return item;
};

export { getItemIndex, getItem };

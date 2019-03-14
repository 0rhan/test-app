import React from "react";

const ItemsContext = React.createContext();

const ItemsProvider = ItemsContext.Provider;
const ItemsConsumer = ItemsContext.Consumer;

export { ItemsProvider, ItemsConsumer };

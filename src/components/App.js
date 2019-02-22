import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";
import { ItemsContext } from "../data/context";
import Item from "./Content/Item/Item";
import uuid from "uuid/v4";

class App extends Component {
  state = {
    item: {
      name: "",
      price: 1,
      date: "",
      id: ""
    },
    itemsCollection: [],
    collectedItems: ""
  };

  render() {
    return (
      <ItemsContext.Provider
        value={{
          state: this.state,

          getItemName: (event, showNameError) => {
            const value = event.target.value;
            if (value === "") {
              showNameError(true);
            } else {
              showNameError(false);
              this.setState(prevState => ({
                item: {
                  ...prevState.item,
                  name: value
                }
              }));
            }
          },

          getItemPrice: (event, showPriceError) => {
            const value = event.target.value;
            if (isNaN(value) || +value === 0) {
              showPriceError(true);
            } else {
              showPriceError(false);
              this.setState(prevState => ({
                item: {
                  ...prevState.item,
                  price: value
                }
              }));
            }
          },

          getItemDate: dateObj => {
            const { _d: date } = dateObj;

            const options = {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit"
            };

            const formattedDate = date.toLocaleString("ru", options);

            this.setState(prevState => ({
              item: {
                ...prevState.item,
                date: formattedDate
              }
            }));
          },

          saveItem: () => {
            const itemsCollection = this.state.itemsCollection;
            const id = uuid();

            this.setState(prevState => ({
              item: { ...prevState.item, id: id }
            }));

            console.log(this.state.item);

            const newCollection = itemsCollection;
            newCollection.push(this.state.item);

            this.setState({
              itemsCollection: newCollection
            });

            let newItemsCollection = itemsCollection.map(
              ({ name, price, date, id } = this.state.item) => (
                <Item key={id} name={name} price={price} date={date} id={id} />
              )
            );

            this.setState(() => ({
              collectedItems: newItemsCollection
            }));
          }
        }}
      >
        <TopBar />
        <Content />
        <BottomBar />
      </ItemsContext.Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";
import ItemsContext from "../data/context";
import uuid from "uuid/v4";

class App extends Component {
  state = {
    item: {
      name: "",
      price: 1,
      date: "",
      id: ""
    },
    itemsCollection: []
  };

  getItemName = (event, showNameError) => {
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
  };

  getItemPrice = (event, showPriceError) => {
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
  };

  getItemDate = dateObj => {
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
  };

  saveItem = () => {
    const { itemsCollection } = this.state;
    const id = uuid();

    this.setState(
      prevState => ({
        item: {
          ...prevState.item,
          id: id
        }
      }),
      () => {
        this.setState(prevState => ({
          itemsCollection: [...itemsCollection, prevState.item]
        }));
      }
    );
  };

  deleteItem = elemId => {
    const { itemsCollection } = this.state;
    const newCollection = itemsCollection.filter(item => {
      const { id } = item;
      return id !== elemId;
    });
    this.setState({
      itemsCollection: newCollection
    });
  };

  render() {
    return (
      <ItemsContext.Provider
        value={{
          state: this.state,
          getItemName: this.getItemName,
          getItemPrice: this.getItemPrice,
          getItemDate: this.getItemDate,
          saveItem: this.saveItem,
          deleteItem: this.deleteItem
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

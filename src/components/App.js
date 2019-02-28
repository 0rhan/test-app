import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";
import { ItemsContext, DrawerContext } from "../data/context";
import uuid from "uuid/v4";
import isNameEmpty from "../utils/functions/isNameEmpty";
import isNotNumber from "../utils/functions/isNotNumber";
import getDateString from "../utils/functions/getDateString";

class App extends Component {
  state = {
    // Данные о покупке
    item: {
      name: "",
      price: "",
      date: "",
      id: ""
    },

    //Коллекция покупок
    itemsCollection: [],

    //Индекс товара в массиве (для редактирования информации о покупке)
    elementIndex: {
      index: ""
    },

    drawers: {
      addDrawer: {
        bottom: false
      },
      editDrawer: {
        bottom: false
      }
    }
  };

  // Показать форму для добавления покупки
  toggleAddDrawer = (side, open) => {
    this.setState(prevState => ({
      drawers: {
        ...prevState.drawers,
        addDrawer: {
          [side]: open
        }
      }
    }));
  };

  //Передача информации о покупке, валидация
  writeItemInfo = (event, showError) => {
    const value = event.target.value;
    const type = event.target.type;
    const { date } = this.state.item;

    // Установка даты по умолчанию
    if (date === "") {
      const currentDate = new Date();
      const formattedDate = getDateString(currentDate);
      this.setState(prevState => ({
        item: {
          ...prevState.item,
          date: formattedDate
        }
      }));
    }

    //"Валидация" данных при добавлении
    switch (type) {
      case "text":
        if (isNameEmpty(value)) {
          showError(true);
        } else {
          showError(false);
        }
        this.setState(prevState => ({
          item: {
            ...prevState.item,
            name: value
          }
        }));
        break;
      case "number":
        if (isNotNumber(value)) {
          showError(true);
        } else {
          showError(false);
        }
        this.setState(prevState => ({
          item: {
            ...prevState.item,
            price: value
          }
        }));
        break;
      default:
    }
  };

  getItemDate = dateObj => {
    const { _d: date } = dateObj;

    const formattedDate = getDateString(date);

    this.setState(prevState => ({
      item: {
        ...prevState.item,
        date: formattedDate
      }
    }));
  };

  saveItem = () => {
    const {
      itemsCollection,
      item: { name, price }
    } = this.state;
    const id = uuid();

    if (name && price) {
      this.setState(
        prevState => ({
          item: {
            ...prevState.item,
            id: id
          }
        }),
        () => {
          this.setState(
            prevState => ({
              itemsCollection: [...itemsCollection, prevState.item]
            }),
            () =>
              this.setState(prevState => ({
                item: {
                  name: "",
                  price: "",
                  date: "",
                  id: ""
                }
              }))
          );
        }
      );
    }
  };

  toggleEditDrawer = (side, open) => {
    this.setState(prevState => ({
      drawers: {
        ...prevState.drawers,
        editDrawer: {
          [side]: open
        }
      }
    }));
  };

  getElementIndex = index => {
    this.setState(prevState => ({
      elementIndex: {
        index: index
      }
    }));
  };

  editItem = (index, id) => {
    const { itemsCollection, item } = this.state;
    this.setState(prevState => ({
      item: {
        ...prevState.item,
        id: id
      }
    }));
    const updatedItemsCollection = [...itemsCollection];
    updatedItemsCollection[index] = item;
    this.setState(
      prevState => ({
        itemsCollection: updatedItemsCollection
      })
      //() => console.log(this.state.itemsCollection)
    );
  };

  deleteItem = id => {
    const { itemsCollection } = this.state;

    const newCollection = itemsCollection.filter(elem => {
      const { id: elemId } = elem;
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
          writeItemInfo: this.writeItemInfo,
          getItemDate: this.getItemDate,
          saveItem: this.saveItem,
          deleteItem: this.deleteItem,
          editItem: this.editItem
        }}
      >
        <DrawerContext.Provider
          value={{
            state: this.state,
            toggleAddDrawer: this.toggleAddDrawer,
            toggleEditDrawer: this.toggleEditDrawer,
            getElementIndex: this.getElementIndex
          }}
        >
          <TopBar />
          <Content />
          <BottomBar />
        </DrawerContext.Provider>
      </ItemsContext.Provider>
    );
  }
}

export default App;

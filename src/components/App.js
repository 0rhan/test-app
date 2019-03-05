import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";
import { ItemsContext, DrawerContext } from "../data/context";
import isNameEmpty from "../utils/functions/isNameEmpty";
import isNotNumber from "../utils/functions/isNotNumber";
import getDateString from "../utils/functions/getDateString";
import {
  ascendingPrice,
  descendingPrice
} from "../utils/functions/sortItemsByPrice";
import {
  descendingDate,
  ascendingDate
} from "../utils/functions/sortItemsByDate";

class App extends Component {
  state = {
    // Данные о покупке
    item: {
      name: "",
      price: "",
      date: ""
    },

    //Коллекция покупок
    itemsCollection: [],

    //Индекс товара в массиве (для редактирования информации о покупке)
    elementIndex: {
      index: ""
    },

    // Состояние контейнеров с формами для добавления и редактирования
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

  // Получение даты покупки
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

  // Запись данных о покупке в коллекцию.
  saveItem = () => {
    const {
      itemsCollection,
      item: { name, price }
    } = this.state;

    if (name && price) {
      this.setState(
        prevState => ({
          item: {
            ...prevState.item
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
                  date: ""
                }
              }))
          );
        }
      );
    }
  };

  // Вывод формы для редактрования покупки
  toggleEditDrawer = (side, open, index) => {
    this.setState(
      prevState => ({
        drawers: {
          ...prevState.drawers,
          editDrawer: {
            [side]: open
          }
        }
      }),
      () => {
        if (index !== undefined) {
          const { itemsCollection } = this.state;
          const itemForEdit = itemsCollection[index];
          const { name, price } = itemForEdit;
          this.setState(prevState => ({
            item: {
              ...prevState.item,
              name: name,
              price: price
            }
          }));
        }
      }
    );
  };

  // Получение индекса элемента в коллекции
  getElementIndex = index => {
    this.setState(prevState => ({
      elementIndex: {
        index: index
      }
    }));
  };

  // Редактирование покупки и запись в коллекцию
  editItem = index => {
    const { itemsCollection, item } = this.state;
    this.setState(prevState => ({
      item: {
        ...prevState.item
      }
    }));
    const updatedItemsCollection = [...itemsCollection];
    updatedItemsCollection[index] = item;
    this.setState(
      prevState => ({
        itemsCollection: updatedItemsCollection
      }),
      () => {
        this.setState({
          item: {
            name: "",
            price: "",
            date: ""
          }
        });
      }
    );
  };

  // Сортировка списка
  getSortedItems = sortBy => {
    const { itemsCollection } = this.state;
    const newItemsCollection = [...itemsCollection];
    switch (sortBy) {
      case "ascending price":
        newItemsCollection.sort(ascendingPrice);
        this.setState(prevState => ({
          itemsCollection: newItemsCollection
        }));
        break;
      case "descending price":
        newItemsCollection.sort(descendingPrice);
        this.setState(prevState => ({
          itemsCollection: newItemsCollection
        }));
        break;
      case "ascending date":
        newItemsCollection.sort(ascendingDate);
        this.setState(prevState => ({
          itemsCollection: newItemsCollection
        }));
        break;
      case "descending date":
        newItemsCollection.sort(descendingDate);
        this.setState(prevState => ({
          itemsCollection: newItemsCollection
        }));
        break;
      default:
    }
  };

  // Удаление покупки из списка
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
          editItem: this.editItem,
          getSortedItems: this.getSortedItems
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

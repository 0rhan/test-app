import React, { Component } from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";
import { ItemsProvider } from "../data/context";
import uuidV4 from "uuid/v4";
import { getItemIndex } from "../utils/utils";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/themes";

class App extends Component {
  state = {
    itemsCollection: [],
    drawer: {
      open: false,
      formMode: "adding",
      elemKey: ""
    }
  };

  openDrawer = (open, mode, elemKey) => () => {
    this.setState({
      drawer: {
        open: open,
        formMode: mode,
        elemKey: elemKey
      }
    });
  };

  closeDrawer = open => {
    this.setState(prevState => ({
      drawer: {
        ...prevState.drawer,
        open: open
      }
    }));
  };

  // Добавить в список
  writeItem = (name, price, date, elemKey) => {
    const {
      drawer: { formMode }
    } = this.state;

    let item = {
      name: name,
      price: price,
      date: date
    };

    const mode = {
      // Добавление в список
      adding: () => {
        const key = uuidV4();
        item.key = key;

        this.setState(prevState => ({
          itemsCollection: [...prevState.itemsCollection, item]
        }));
      },

      // Редактирование списка
      editing: () => {
        const { itemsCollection } = this.state;
        let collectionForEdit = [...itemsCollection];

        // Получение индекса нужного элемента
        const itemIndex = getItemIndex(itemsCollection, elemKey);

        // Замена на новый элемент
        item.key = elemKey;
        collectionForEdit[itemIndex] = item;

        this.setState({
          itemsCollection: [...collectionForEdit]
        });
      }
    };

    mode[formMode]();
  };

  // Удалить из списка
  deleteItem = elemKey => () => {
    const { itemsCollection } = this.state;
    const filteredCollection = itemsCollection.filter(
      item => elemKey !== item.key
    );
    this.setState({
      itemsCollection: [...filteredCollection]
    });
  };

  // Сортировка
  sortItem = (name, direction) => {
    const { itemsCollection } = this.state;
    let collectionForSort = [...itemsCollection];

    collectionForSort.sort((a, b) => {
      return direction ? a[name] - b[name] : b[name] - a[name];
    });

    this.setState({
      itemsCollection: [...collectionForSort]
    });
  };

  render() {
    const {
      itemsCollection,
      drawer: { open, formMode, elemKey }
    } = this.state;
    return (
      <>
        <ItemsProvider
          value={{
            writeItem: this.writeItem,
            deleteItem: this.deleteItem,
            openDrawer: this.openDrawer,
            closeDrawer: this.closeDrawer,
            sortItem: this.sortItem,
            itemsCollection: itemsCollection,
            elemKey: elemKey,
            open: open,
            formMode: formMode
          }}
        >
          <ThemeProvider theme={mainTheme}>
            <>
              <TopBar />
              <Content itemsCollection={itemsCollection} />
              <BottomBar />
            </>
          </ThemeProvider>
        </ItemsProvider>
      </>
    );
  }
}
export default App;

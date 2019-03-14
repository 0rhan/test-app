import React, { Component } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { ItemsConsumer } from "../../../data/context";

const StyledFormControl = styled(FormControl)`
  && {
    margin: 10px;
    min-width: 110px;
  }
`;

class Controls extends Component {
  state = {
    select: "",
    sort: {
      price: "price",
      date: "date"
    },
    direction: ""
  };

  handleClick = (direction, name) => {
    console.log("triggurs");
    const { sortItem } = this.props;
    console.log(sortItem);
    this.setState(
      {
        direction: direction
      },
      () => {
        sortItem(name, direction);
      }
    );
  };

  changeSelect = event => {
    this.setState({
      select: event.target.value
    });
  };

  render() {
    const {
      sort: { price, date }
    } = this.state;
    return (
      <form>
        <StyledFormControl>
          <Select
            value={this.state.select}
            onChange={event => this.changeSelect(event)}
            name="sortitems"
            displayEmpty
          >
            <MenuItem value="" disabled>
              Сортировка
            </MenuItem>
            <MenuItem
              value="descending price"
              onClick={() => {
                this.handleClick(false, price);
              }}
            >
              По убыванию цены
            </MenuItem>
            <MenuItem
              value="ascending price"
              onClick={() => {
                this.handleClick(true, price);
              }}
            >
              По возрастанию цены
            </MenuItem>
            <MenuItem
              value="ascending date"
              onClick={() => {
                this.handleClick(false, date);
              }}
            >
              По дате, позже
            </MenuItem>
            <MenuItem
              value="descending date"
              onClick={() => {
                this.handleClick(true, date);
              }}
            >
              По дате, раньше
            </MenuItem>
          </Select>
        </StyledFormControl>
      </form>
    );
  }
}

export default Controls;

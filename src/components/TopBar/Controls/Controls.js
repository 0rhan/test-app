import React, { Component } from "react";
import styled from "styled-components";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { ItemsContext } from "../../../data/context";

const StyledFormControl = styled(FormControl)`
  && {
    margin: 10px;
    min-width: 110px;
  }
`;

class Controls extends Component {
  state = {
    sort: ""
  };

  handleSort = event => {
    const context = this.context;
    const { getSortedItems } = context;
    this.setState(
      prevState => ({
        ...prevState,
        sort: event.target.value
      }),
      () => {
        getSortedItems(this.state.sort);
      }
    );
  };

  render() {
    return (
      <form>
        <StyledFormControl>
          <Select
            value={this.state.sort}
            onChange={event => this.handleSort(event)}
            name="sortitems"
            displayEmpty
          >
            <MenuItem value="" disabled>
              Сортировка
            </MenuItem>
            <MenuItem value="descending price">По убыванию цены</MenuItem>
            <MenuItem value="ascending price">По возрастанию цены</MenuItem>
            <MenuItem value="ascending date">По дате, позже</MenuItem>
            <MenuItem value="descending date">По дате, раньше</MenuItem>
          </Select>
        </StyledFormControl>
      </form>
    );
  }
}

Controls.contextType = ItemsContext;

export default Controls;

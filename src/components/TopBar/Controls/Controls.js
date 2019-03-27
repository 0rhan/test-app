import React, { Component } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";

class Controls extends Component {
  state = {
    select: ""
  };

  handleClick = event => {
    const value = event.target.value;
    const { name, direction } = value;
    const { sortItem } = this.props;
    sortItem(name, direction);
  };

  render() {
    return (
      <form>
        <StyledFormControl>
          <Select
            value={this.state.select}
            onChange={event => this.handleClick(event)}
            name="sortitems"
            displayEmpty
          >
            <MenuItem value="" disabled>
              Сортировка
            </MenuItem>
            <MenuItem value={{ name: "price", direction: false }}>
              По убыванию цены
            </MenuItem>
            <MenuItem value={{ name: "price", direction: true }}>
              По возрастанию цены
            </MenuItem>
            <MenuItem value={{ name: "date", direction: false }}>
              По дате, позже
            </MenuItem>
            <MenuItem value={{ name: "date", direction: true }}>
              По дате, раньше
            </MenuItem>
          </Select>
        </StyledFormControl>
      </form>
    );
  }
}

export default Controls;

const StyledFormControl = styled(FormControl)`
  && {
    margin: 10px;
    min-width: 110px;
  }
`;

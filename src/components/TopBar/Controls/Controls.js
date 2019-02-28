import React, { Component } from "react";
import styled from "styled-components";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const StyledFormControl = styled(FormControl)`
  && {
    margin: 10px;
    min-width: 110px;
  }
`;

class Controls extends Component {
  state = {
    sort: "",
    filter: ""
  };

  render() {
    return (
      <form>
        <StyledFormControl>
          <Select value={this.state.filter} name="sortitems" displayEmpty>
            <MenuItem value="" disabled>
              Фильтр
            </MenuItem>
            <MenuItem>Цена</MenuItem>
            <MenuItem>Кол-во</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <Select
            value={this.state.sort}
            autoWidth={true}
            name="sortitems"
            displayEmpty
          >
            <MenuItem value="" disabled>
              Сортировка
            </MenuItem>
            <MenuItem>По убыванию</MenuItem>
            <MenuItem>По возрастанию</MenuItem>
          </Select>
        </StyledFormControl>
      </form>
    );
  }
}

export default Controls;

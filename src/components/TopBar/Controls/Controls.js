import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem, } from "@material-ui/core";
import { controlsStyles } from "../../../styles/styles";



class Controls extends Component {
  state = {
    sort: "",
    filter: "",
  }

  render() {
    const { classes } = this.props;
    return(
      <form>
        <FormControl className = { classes.FormControl }>
          <Select
            value = { this.state.filter }
            name = "sortitems"
            displayEmpty
          >
            <MenuItem value = "" disabled>
              Фильтр
            </MenuItem>
            <MenuItem>
              Цена
            </MenuItem>
            <MenuItem>
              Кол-во
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className = { classes.FormControl }>
          <Select
            value = { this.state.sort }
            autoWidth = { true }
            name = "sortitems"
            displayEmpty
          >
            <MenuItem value = "" disabled>
              Сортировка
            </MenuItem>
            <MenuItem>
              По убыванию
            </MenuItem>
            <MenuItem>
              По возрастанию
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(controlsStyles)(Controls)
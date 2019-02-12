import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Input, InputLabel } from "@material-ui/core";
import { itemAddImageStyles } from "../../../../styles/styles";

function ItemAddImage(props) {
  const { classes } = props
  return(
    <>
      <Button
         className = { classes.imgLoadButton }
         variant = "outlined"
         color = "secondary"
         component = "div"
       >
        <InputLabel>
          Загрузить картинку
          <Input
            type = "file"
            inputProps = { { accept: "image/*" } }
          />
        </InputLabel> 
      </Button>
    </>
  )
}

ItemAddImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(itemAddImageStyles)(ItemAddImage);
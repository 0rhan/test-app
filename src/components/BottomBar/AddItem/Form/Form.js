import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardHeader } from "@material-ui/core";
import ItemTextFields from "./ItemTextFields/ItemTextFields";
import { addingItemStyles } from "../../../../styles/styles";
import SelectDate from "./SelectDate/SelectDate";
import ActionButtons from "./ActionButtons/ActionButtons";

function Form(props) {
  const { classes } = props;
  return (
    <Card className={classes.Card}>
      <CardHeader title="Дбавить в список покупок" />
      <form className={classes.Form}>
        <ItemTextFields />
        <SelectDate />
        <ActionButtons toggleAddDrawer={props.toggleAddDrawer} />
      </form>
    </Card>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addingItemStyles)(Form);
